import User from '../../models/user';
import utils from '../../utils/utils';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    const requiredFields = ['email', 'password', 'name'];
    const missing = utils.validate(req, requiredFields);
    if (missing != -1) {
        res.status(400).json({status: `${requiredFields[missing]} field is required but is missing`});
        return;
    }
    const {email, password, name} = req.body;
    if (await User.exists({email: email})) {
        res.status(400).json({ status: "email already registered",})
        return;
    }
    const salt = utils.getSalt(32);
    const passwordHash = utils.sha256(password, salt);
    const user = await User.create({name: name, email: email, salt: salt, passwordHash: passwordHash});
    const token = jwt.sign({userId: user._id}, process.env.SECRET_KEY);
    res.json({status: "OK", jwt: token, data: {
        _id: user._id.toString(),
        name: user.name,
        email: user.email,
        shopIDs: [],
    }});
}