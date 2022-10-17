const User = require('../models/user')
const Shop = require('../models/shop')
const Item = require('../models/item')
const Employee = require('../models/employee')
const Log = require('../models/log')

module.exports = {
    get:  async (req, res) => {
        try {
            const shop = await Shop.findById(req.data._id).orFail()
            return res.status(200).json({ status: 'OK', data: shop })
        } catch ({ message }) {
            return res.status(400).json({ status: message })
        }
    },
    post: async (req, res) => {
        try {
            req.data.owners = [req.userId];
            const shop = await Shop.create(req.data)
            const user = await User.findById(req.userId)
            user.shops.push(shop._id)
            await user.save()
            return res.status(200).json({ status: 'OK', data: shop })
        } catch ({ message }) {
            return res.status(400).json({ status: message })
        }
    },
    put: async (req, res) => {
        try {
            let shop = await Shop.findById(req.data._id).orFail()
            shop.name = req.data.name
            shop.address = req.data.address
            await shop.save();
            return res.status(200).json({ status: 'OK', data: shop })
        } catch ({ message }) {
            return res.status(400).json({ status: message })
        }
    },
    delete: async (req, res) => {
        try {
            await Shop.findByIdAndDelete(req.data._id).orFail();
            const user = await User.findById(req.userId)
            user.shops.splice(user.shops.indexOf(req.data._id), 1)
            await user.save()
            await Item.deleteMany({ shopID: req.data._id })
            await Employee.deleteMany({ shopID: req.data._id })
            await Log.deleteMany({ shopID: req.data._id })
            return res.status(200).json({ status: 'OK'})
        } catch ({ message }) {
            return res.status(400).json({ status: message })
        }
    }
}