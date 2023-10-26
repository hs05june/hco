const User = require('../models/user')
const utils = require('../../utils/utils')
const jwt = require('jsonwebtoken')
const cookie = require("cookie")

module.exports = {
	register: async (req, res) => {
		try {
			const { email, password, name } = req.body
			if (email == undefined)
				return res.status(400).json({ status: "email field is required" })
			if (password == undefined)
				return res.status(400).json({ status: "password field is required" })
			if (name == undefined)
				return res.status(400).json({ status: "name field is required" })
			const salt = utils.getSalt(32)
			const passwordHash = utils.sha256(password, salt)
			const user = await User.create({ name: name, email: email, salt: salt, passwordHash: passwordHash })
			const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY)
			res.setHeader('Set-Cookie', cookie.serialize('token', token, {
				httpOnly: true, 
				secure: process.env.NODE_ENV === 'production' ? true : false, 
				sameSite: 'Strict', 
			  }));
			res.json({
				status: 'OK',
				data: {
					_id: user._id.toString(),
					name: user.name,
					email: user.email,
					shops: [],
				},
			})
			res.redirect("/home")
		
		} catch ({ message }) {
			res.status(400).json({ status: message })
		}
	},
}
