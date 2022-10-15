import Shop from '../../models/shop';
import Item from '../../models/item';
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
    const missing = utils.validate(req, ['shopID']);
    if (missing != -1) {
        res.status(400).json({status: `${requiredFields[missing]} field is required but is missing`});
        return;
    }
    const {shopID} = req.body;
    const shop = await Shop.findById(shopID);
    if (shop === null) {
        res.status(404).json({status: `No shop found with id ${id}`});
        return;
    }
    if (!shop.owners.includes(auth.userId)) {
        res.status(403).json({status: `User ${auth.userId} is not authorized to access Shop ${id}`});
        return;
    }
    if (req.method === "POST") {
        const requiredFields = ['name', 'description', 'leftInStock', 'alertAt', 'sellPrice', 'costPrice'];
        const missing = utils.validate(req, requiredFields);
        if (missing != -1) {
            res.status(400).json({status: `${requiredFields[missing]} field is required but is missing`});
            return;
        }
        const {name, description, leftInStock, alertAt, sellPrice, costPrice} = req.body;
        const item = await Item.create({
            name: name, 
            description: description,
            shopID: shopID,
            leftInStock: leftInStock,
            alertAt: alertAt,
            sellPrice: sellPrice,
            costPrice: costPrice,
        });
        shop.items.push(item._id);
        await shop.save();
        res.status(200).json({status: "OK", data: {
            _id: item._id.toString(),
            name: item.name,
            description: item.description,
            shopID: item.shopID.toString(),
            leftInStock: item.leftInStock,
            alertAt: item.alertAt,
            sellPrice: item.sellPrice,
            costPrice: item.costPrice,
        }});
    } else if (req.method === "GET") {
        const requiredFields = ['itemID'];
        const missing = utils.validate(req, requiredFields);
        if (missing != -1) {
            res.status(400).json({status: `${requiredFields[missing]} field is required but is missing`});
            return;
        }
        const {itemID} = req.body;
        const item = await Item.findById(itemID);
        if (item === null) {
            res.status(404).json({status: `No Item found with id ${itemID}`});
            return;
        }
        if (item.shopID.toString() !== shopID) {
            res.status(403).json({status: `Item ${itemID} is not from Shop ${shopID}`});
            return;
        }
        res.status(200).json({status: "OK", data: {
            _id: item._id.toString(),
            name: item.name,
            description: item.description,
            shopID: item.shopID.toString(),
            leftInStock: item.leftInStock,
            alertAt: item.alertAt,
            sellPrice: item.sellPrice,
            costPrice: item.costPrice,
        }});
    } else if (req.method === 'PUT' || req.method === 'PATCH') {
        const requiredFields = ['name', 'description', 'leftInStock', 'alertAt', 'costPrice', 'itemID'];
        const missing = utils.validate(req, requiredFields);
        if (missing != -1) {
            res.status(400).json({status: `${requiredFields[missing]} field is required but is missing`});
            return;
        }
        const {name, description, leftInStock, alertAt, sellPrice, itemID, costPrice} = req.body;
        const item = await Item.findById(itemID);
        if (item === null) {
            res.status(404).json({status: `No item found with id ${itemID}`});
            return;
        }
        if (item.shopID.toString() !== shopID) {
            res.status(403).json({status: `Item ${itemID} is not from Shop ${shopID}`});
            return;
        }
        item.name = name
        item.description = description
        item.leftInStock = leftInStock
        item.alertAt = alertAt
        item.sellPrice = sellPrice
        item.costPrice = costPrice
        await item.save();
        res.status(200).json({status: "OK", data: {
            _id: item._id.toString(),
            name: item.name,
            description: item.description,
            shopID: item.shopID.toString(),
            leftInStock: item.leftInStock,
            alertAt: item.alertAt,
            sellPrice: item.sellPrice,
            costPrice: item.costPrice,
        }});
    } else if (req.method === "DELETE") {
        const requiredFields = ['itemID'];
        const missing = utils.validate(req, requiredFields);
        if (missing != -1) {
            res.status(400).json({status: `${requiredFields[missing]} field is required but is missing`});
            return;
        }
        const {itemID} = req.body;
        const item = await item.findById(itemID);
        if (item === null) {
            res.status(404).json({status: `No item found with id ${itemID}`});
            return;
        }
        if (item.shopID.toString() !== shopID) {
            res.status(403).json({status: `Item ${itemID} is not from Shop ${shopID}`});
            return;
        }
        shop.items.splice(shop.items.indexOf(item._id), 1);
        await shop.save();
        await item.findByIdAndDelete(itemID);
        res.status(200).json({status: "OK"});
    }
}