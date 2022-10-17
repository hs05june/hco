const Log = require('../models/Log')

module.exports = {
    get:  async (req, res) => {
        try {
            const log = await Log.findById(req.data._id).orFail()
            return res.status(200).json({ status: 'OK', data: log })
        } catch ({ message }) {
            return res.status(400).json({ status: message })
        }
    },
    post: async (req, res) => {
        try {
            const log = await Log.create(req.data)
            return res.status(200).json({ status: 'OK', data: log })
        } catch ({ message }) {
            return res.status(400).json({ status: message })
        }
    },
    put: async (req, res) => {
        try {
            let log = await Log.findById(req.data._id).orFail()
            log.typeOfTransaction = req.data.typeOfTransaction
            log.description = req.data.description
            log.numberOfItems = req.data.numberOfItems
            log.price = req.data.price
            log.itemID = req.data.itemID
            await log.save();
            return res.status(200).json({ status: 'OK', data: log })
        } catch ({ message }) {
            return res.status(400).json({ status: message })
        }
    },
    delete: async (req, res) => {
        try {
            await Log.findByIdAndDelete(req.data._id).orFail();
            return res.status(200).json({ status: 'OK'})
        } catch ({ message }) {
            return res.status(400).json({ status: message })
        }
    }
}