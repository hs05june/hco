const { verify } = require('jsonwebtoken');
const User = require('../models/user');
const Shop = require('../models/shop');
const Item = require('../models/item');
const Employee = require('../models/employee');
const Log = require('../models/log');

module.exports = async (req, res, next) => {
    const url = req.url;
    if (['/login', '/register'].includes(url))
        return next();
        
    //jwt verification
    const bearerHeader = req.headers['authorization'];
    if (bearerHeader === undefined)
        return res.status(403).json({status:'JWT Token Required'});
    const bearerToken = bearerHeader.split(' ')[1];
    try {
        const payload = verify(bearerToken, process.env.SECRET_KEY);
        const exists = await User.exists({_id: payload.userId}) !== null;
        if (exists)
            req.userId = payload.userId;
        else
            return res.status(403).json({status:'JWT Verification Failed'});
    } catch (err) {
        return res.status(403).json({status:'JWT Verification Failed'});
    }

    if (['POST', 'PUT', 'PATCH'].includes(req.method) && ['/item', '/employee', '/shop', '/log'].includes(url)) {
        const obj = url === '/item' ? Item : url === '/shop' ? Shop : url === '/log' ? Log : url === '/employee' ? Employee : null;
        let fields = Object.keys(obj.schema.obj)
        for (let i in fields)
            fields[i] = { field: fields[i], type: obj.schema.paths[fields[i]].instance.toLowerCase() };
        fields = fields.filter(field => field.type !== 'array')
        if (req.method === 'POST') fields = fields.map(field => ({...field, type: field.type === 'objectid' ? 'string': field.type}))
        else fields = fields.filter(field => field.type !== 'objectid')
        if (req.method !== 'POST') fields.push({ field: "_id", type: 'string' })
        const data = {}
        for (let i of fields) {
            if (req.body[i.field] === undefined)
                return res.status(400).json({ status: `${[i.field]} is required`})
            if (typeof req.body[i.field] !== i.type)
                return res.status(400).json({ status: `${[i.field]} must be of type ${i.type}`})
            data[i.field] = req.body[i.field]
        }
        req.data = data
    }

    if (['PUT', 'PATCH', 'GET', 'DELETE'].includes(req.method) && ['/item', '/employee', '/shop', '/log'].includes(url)) {
        const obj = url === '/item' ? Item : url === '/shop' ? Shop : url === '/log' ? Log : url === '/employee' ? Employee : null;
        const id = req.body._id;
        if (id === undefined)
            return res.status(400).json({ status: '_id not found' });
        if (typeof id !== 'string')
            return res.status(400).json({ status: '_id must be string' });
        const entry = obj.findById(id);
        if (entry === null)
            return res.status(400).json({ status: `no entry for _id ${id}` });
        if (req.data === undefined) req.data = {};
            req.data._id = id;
    }

    if (['/item', '/employee', '/log'].includes(url) && ['GET', 'PUT', 'PATCH', 'DELETE'].includes(req.method)) {
        const obj = url === '/item' ? Item : url === '/employee' ? Employee : url === '/log' ? Log : null;
        const entry = await obj.findById(req.data._id)
        const shopID = entry.shopID;
        const shop = await Shop.findById(shopID);
        if (shop === null)
            return res.status(400).json({ status: `no shop with id ${shop._id}` })
        if (!shop.owners.includes(req.userId))
            return res.status(403).json({ status: `${req.userId} can not access shop ${shop._id}` })
        req.shopID = shop._id
    }

    if (['/item', '/employee', '/log'].includes(url) && ['POST'].includes(req.method)) {
        const shop = await Shop.findById(req.data.shopID);
        if (shop === null)
            return res.status(400).json({ status: `no shop with id ${req.data.shopID}` })
        if (!shop.owners.includes(req.userId))
            return res.status(403).json({ status: `${req.userId} can not access shop ${shop._id}` })
        req.shopID = shop._id
    }

    if (url === '/log' && ['POST', 'PUT', 'PATCH'].includes(req.method)) {
        const item = await Item.findById(req.data.shopID);
        if (item === null)
            return res.status(400).json({ status: `no item with id ${item._id}` })
        if (!item.owners.includes(req.userId))
            return res.status(403).json({ status: `${req.userId} can not access item ${item._id}` })
        req.shopID = item._id
    }

    if (url === '/shop' && ['GET', 'PUT', 'PATCH', 'DELETE'].includes(req.method)) {
        const shop = await Shop.findById(req.data._id);
        if (shop === null)
            return res.status(400).json({ status: `no shop with id ${req.data._id}` })
        if (!shop.owners.includes(req.userId))
            return res.status(403).json({ status: `${req.userId} can not access shop ${shop._id}` })

    }

    if (url === '/log' && ['POST', 'PUT', 'PATCH'].includes(req.method)) {
        const item = await Item.findById(req.data.itemID)
        if (item.shopID !== req.shopID)
            return res.status(403).json({ status: `item ${item._id} does not belong to shop ${req.data.shopID}` })
    }

    return next();
}