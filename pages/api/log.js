import Shop from '../../models/shop';
import Log from '../../models/log';
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
        const requiredFields = ['typeOfTransaction', 'description', 'itemID', 'numberOfItems', 'price'];
        const missing = utils.validate(req, requiredFields);
        if (missing != -1) {
            res.status(400).json({status: `${requiredFields[missing]} field is required but is missing`});
            return;
        }
        const {typeOfTransaction, description, itemID, numberOfItems, price} = req.body;
        if (typeOfTransaction !== 'sell' && typeOfTransaction !== 'restock') {
            res.status(400).json({status: "typeOfTransaction must be sell or restock"});
            return;
        }
        const log = await Log.create({
            typeOfTransaction: typeOfTransaction,
            description: description,
            shopID: shopID,
            itemID: itemID,
            numberOfItems: numberOfItems,
            price: price,
        });
        res.status(200).json({status: "OK", data: {
            _id: log._id.toString(),
            typeOfTransaction: log.typeOfTransaction,
            description: log.description,
            shopID: log.shopID.toString(),
            itemID: log.itemID,
            numberOfItems: log.numberOfItems,
            price: log.price,
        }});
    } else if (req.method === "GET") {
        const requiredFields = ['logID'];
        const missing = utils.validate(req, requiredFields);
        if (missing != -1) {
            res.status(400).json({status: `${requiredFields[missing]} field is required but is missing`});
            return;
        }
        const {logID} = req.body;
        const log = await Log.findById(logID);
        if (log === null) {
            res.status(404).json({status: `No Log found with id ${logID}`});
            return;
        }
        if (log.shopID.toString() !== shopID) {
            res.status(403).json({status: `Log ${logID} is not from Shop ${shopID}`});
            return;
        }
        res.status(200).json({status: "OK", data: {
            _id: log._id.toString(),
            typeOfTransaction: log.typeOfTransaction,
            description: log.description,
            shopID: log.shopID.toString(),
            itemID: log.itemID,
            numberOfItems: log.numberOfItems,
            price: log.price,
        }});
    } else if (req.method === 'PUT' || req.method === 'PATCH') {
        const requiredFields = ['typeOfTransaction', 'description', 'itemID', 'numberOfItems', 'price', 'logID'];
        const missing = utils.validate(req, requiredFields);
        if (missing != -1) {
            res.status(400).json({status: `${requiredFields[missing]} field is required but is missing`});
            return;
        }
        const {name, description, leftInStock, alertAt, sellPrice, logID, costPrice} = req.body;
        const log = await Log.findById(logID);
        if (log === null) {
            res.status(404).json({status: `No log found with id ${logID}`});
            return;
        }
        if (log.shopID.toString() !== shopID) {
            res.status(403).json({status: `Log ${logID} is not from Shop ${shopID}`});
            return;
        }
        log.typeOfTransaction = typeOfTransaction;
        log.description = description;
        log.itemID = itemID;
        log.numberOfItems = numberOfItems;
        log.price = price;
        await log.save();
        res.status(200).json({status: "OK", data: {
            _id: log._id.toString(),
            typeOfTransaction: log.typeOfTransaction,
            description: log.description,
            shopID: log.shopID.toString(),
            itemID: log.itemID,
            numberOfItems: log.numberOfItems,
            price: log.price,
        }});
    } else if (req.method === "DELETE") {
        const requiredFields = ['logID'];
        const missing = utils.validate(req, requiredFields);
        if (missing != -1) {
            res.status(400).json({status: `${requiredFields[missing]} field is required but is missing`});
            return;
        }
        const {logID} = req.body;
        const log = await log.findById(logID);
        if (log === null) {
            res.status(404).json({status: `No log found with id ${logID}`});
            return;
        }
        if (log.shopID.toString() !== shopID) {
            res.status(403).json({status: `Log ${logID} is not from Shop ${shopID}`});
            return;
        }
        await log.findByIdAndDelete(logID);
        res.status(200).json({status: "OK"});
    }
}