const Shop = require('../models/shop')
const Employee = require('../models/employee')

module.exports = {
    get:  async (req, res) => {
        try {
            const employee = await Employee.findById(req.data._id).orFail()
            return res.status(200).json({ status: 'OK', data: employee })
        } catch ({ message }) {
            return res.status(400).json({ status: message })
        }
    },
    post: async (req, res) => {
        try {
            const employee = await Employee.create(req.data)
            const shop = await Shop.findById(req.shopID)
            shop.employees.push(employee._id)
            await shop.save()
            return res.status(200).json({ status: 'OK', data: employee })
        } catch ({ message }) {
            return res.status(400).json({ status: message })
        }
    },
    put: async (req, res) => {
        try {
            let employee = await Employee.findById(req.data._id).orFail()
            employee.name = req.data.name
            employee.paymentInterval = req.data.paymentInterval
            employee.salary = req.data.salary
            await employee.save();
            return res.status(200).json({ status: 'OK', data: employee })
        } catch ({ message }) {
            return res.status(400).json({ status: message })
        }
    },
    delete: async (req, res) => {
        try {
            await Employee.findByIdAndDelete(req.data._id).orFail();
            const shop = await Shop.findById(req.shopID)
            shop.employees.splice(shop.employees.indexOf(req.data._id), 1)
            await shop.save()
            return res.status(200).json({ status: 'OK'})
        } catch ({ message }) {
            return res.status(400).json({ status: message })
        }
    }
}