const User = require('../models/user')

module.exports = {
	get: async (req, res) => {
		try {
			const user = await User.findById(req.userId).orFail()
			return res.status(200).json({
				status: 'OK',
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
