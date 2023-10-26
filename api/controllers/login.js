const User = require('../models/user')
const utils = require('../../utils/utils')
const jwt = require('jsonwebtoken')

module.exports = {
	login: async (req, res) => {
		try {
			const { email, password } = req.body
			if (email == undefined)
				return res.status(400).json({ status: "email field is required" })
			if (password == undefined)
				return res.status(400).json({ status: "password field is required" })
			const user = await User.findOne({ email: email }).orFail()

			const hash = utils.sha256(password, user.salt)

			if (hash !== user.passwordHash) return res.json({ status: 'password incorrect' })
			const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY)


			return res.json({
				status: 'OK',
				jwt: token,
				data: {
					_id: user._id.toString(),
					name: user.name,
					email: user.email,
					shops: user.shops.map(id => id.toString()),
				},
			})
		} catch ({ message }) {
			return res.status(400).json({ status: message })
		}
	},
}
