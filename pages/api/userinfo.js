import Shop from '../../models/shop';
import User from '../../models/user';
import utils from '../../utils/utils';

export default async function handler(req, res) {
    const auth = await utils.auth(req);
    if (auth === undefined) {
        res.status(403).json({status: "JWT missing"});
        return;
    }
    if (auth === null) {
        res.status(403).json({status: "JWT verification failed"});
        return;
    }
    const user = await User.findById(auth.userId);
    res.status(200).json({status: "OK", data: {
        _id: user._id.toString(),
        name: user.name,
        email: user.email,
        shopIDs: user.shopIDs.map(id => id.toString()),
    }});
}