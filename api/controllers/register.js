const User = require('../models/user')
const utils = require('../../utils/utils')
const jwt = require('jsonwebtoken')

module.exports = {
	register: async (req, res) => {
		try {
			const { email, password, name } = req.body
			const salt = utils.getSalt(32)
			const passwordHash = utils.sha256(password, salt)
			const user = await User.create({ name: name, email: email, salt: salt, passwordHash: passwordHash })
			const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY)
			res.json({
				status: 'OK',
				jwt: token,
				data: {
					_id: user._id.toString(),
					name: user.name,
					email: user.email,
					shops: [],
				},
			})
		} catch ({ message }) {
			res.status(400).json({ status: message })
		}
	},
}
