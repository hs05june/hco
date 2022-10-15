import Shop from '../../models/shop';
import User from '../../models/user';
import utils from '../../utils/utils';

export default async function handler(req, res) {
    const auth = await utils.auth(req);
    if (auth === undefined) {
        res.status(403).json({status: "JWT missing"});
        return;
    }
    if (auth === null) {
        res.status(403).json({status: "JWT verification failed"});
        return;
    }
    if (req.method === "POST") {
        const requiredFields = ['name', 'address'];
        const missing = utils.validate(req, requiredFields);
        if (missing != -1) {
            res.status(400).json({status: `${requiredFields[missing]} field is required but is missing`});
            return;
        }
        const {name, address} = req.body;
        const shop = await Shop.create({
            name: name,
            address: address,
            owners: [auth.userId],
        })
        const user = await User.findById(auth.userId);
        user.shopIDs.push(shop._id);
        await user.save();
        res.status(200).json({status: "OK", data: {
            _id: shop._id.toString(),
            name: shop.name,
            address: shop.address,
            owners: shop.owners.map(_id => _id.toString()),
            items: shop.items.map(_id => _id.toString()),
            employees: shop.employees.map(_id => _id.toString()),
        }});
    } else if (req.method === "GET") {
        const requiredFields = ['id']
        const missing = utils.validate(req, requiredFields);
        if (missing != -1) {
            res.status(400).json({status: `${requiredFields[missing]} field is required but is missing`});
            return;
        }
        const {id} = req.body;
        const shop = await Shop.findById(id);
        if (shop === null) {
            res.status(404).json({status: `No shop found with id ${id}`});
            return;
        }
        if (!shop.owners.includes(auth.userId)) {
            res.status(403).json({status: `User ${auth.userId} is not authorized to access Shop ${id}`});
            return;
        }
        res.status(200).json({status: "OK", data: {
            _id: shop._id.toString(),
            name: shop.name,
            address: shop.address,
            owners: shop.owners.map(_id => _id.toString()),
            items: shop.items.map(_id => _id.toString()),
            employees: shop.employees.map(_id => _id.toString()),
        }})
    } else if (req.method === "PUT" || req.method === "PATCH") {
        const requiredFields = ['id', 'name', 'address']
        const missing = utils.validate(req, requiredFields);
        if (missing != -1) {
            res.status(400).json({status: `${requiredFields[missing]} field is required but is missing`});
            return;
        }
        const {id, name, address} = req.body;
        const shop = await Shop.findById(id);
        if (shop === null) {
            res.status(404).json({status: `No shop found with id ${id}`});
            return;
        }
        if (!shop.owners.includes(auth.userId)) {
            res.status(403).json({status: `User ${auth.userId} is not authorized to access Shop ${id}`});
            return;
        }
        shop.name = name;
        shop.address = address;
        await shop.save();
        res.status(200).json({status: "OK", data: {
            _id: shop._id.toString(),
            name: shop.name,
            address: shop.address,
            owners: shop.owners.map(_id => _id.toString()),
            items: shop.items.map(_id => _id.toString()),
            employees: shop.employees.map(_id => _id.toString()),
        }});
    } else if (req.method === "DELETE") {
        const requiredFields = ['id'];
        const missing = utils.validate(req, requiredFields);
        if (missing != -1) {
            res.status(400).json({status: `${requiredFields[missing]} field is required but is missing`});
            return;
        }
        const {id} = req.body;
        const shop = await Shop.findById(id);
        if (shop === null) {
            res.status(404).json({status: `No shop found with id ${id}`});
            return;
        }
        if (!shop.owners.includes(auth.userId)) {
            res.status(403).json({status: `User ${auth.userId} is not authorized to access Shop ${id}`});
            return;
        }
        const user = await User.findById(auth.userId);
        user.shopIDs.splice(user.shopIDs.indexOf(shop._id), 1);
        await user.save();
        await Shop.findByIdAndDelete(id);
        return res.status(200).json({status: "OK"});
    }
}