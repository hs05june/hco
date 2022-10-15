import User from '../../models/user';
import utils from '../../utils/utils';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    const requiredFields = ['email', 'password'];
    const missing = utils.validate(req, requiredFields);
    if (missing != -1) {
        res.status(400).json({status: `${requiredFields[missing]} field is required but is missing`});
        return;
    }
    const {email, password} = req.body;
    const user = await User.findOne({email: email})
    if (user === null) {
        res.json({ status: "email does not exist",})
        return;
    }
    const hash = utils.sha256(password, user.salt)
    if (hash !== user.passwordHash) {
        res.json({ status: "password incorrect",})
    }
    const token = jwt.sign({userId: user._id}, process.env.SECRET_KEY);
    res.json({status: "OK", jwt: token, data: {
        _id: user._id.toString(),
        name: user.name,
        email: user.email,
        shopIDs: user.shopIDs.map(id => id.toString()),
    }});
}