const Shop = require('../models/shop')
const Item = require('../models/item')

module.exports = {
    get:  async (req, res) => {
        try {
            const item = await Item.findById(req.data._id).orFail()
            return res.status(200).json({ status: 'OK', data: item })
        } catch ({ message }) {
            return res.status(400).json({ status: message })
        }
    },
    post: async (req, res) => {
        try {
            const item = await Item.create(req.data)
            const shop = await Shop.findById(req.shopID)
            shop.items.push(item._id)
            await shop.save()
            return res.status(200).json({ status: 'OK', data: item })
        } catch ({ message }) {
            return res.status(400).json({ status: message })
        }
    },
    put: async (req, res) => {
        try {
            let item = await Item.findById(req.data._id).orFail()
            item.name = req.data.name
            item.description = req.data.description
            item.leftInStock = req.data.leftInStock
            item.alertAt = req.data.alertAt
            item.sellPrice = req.data.sellPrice
            item.costPrice = req.data.costPrice
            item.photoUrl = req.data.photoUrl
            await item.save();
            return res.status(200).json({ status: 'OK', data: item })
        } catch ({ message }) {
            return res.status(400).json({ status: message })
        }
    },
    delete: async (req, res) => {
        try {
            await Item.findByIdAndDelete(req.data._id).orFail();
            const shop = await Shop.findById(req.shopID)
            shop.items.splice(shop.items.indexOf(req.data._id), 1)
            await shop.save()
            return res.status(200).json({ status: 'OK'})
        } catch ({ message }) {
            return res.status(400).json({ status: message })
        }
    }
}