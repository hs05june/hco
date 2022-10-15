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
    const requiredFields = ['id']
    const missing = utils.validate(req, requiredFields);
    if (missing != -1) {
        res.status(400).json({status: `${requiredFields[missing]} field is required but is missing`});
        return;
    }
    const {id} = req.body;
    let shop = await Shop.findById(id);
    if (shop === null) {
        res.status(404).json({status: `No shop found with id ${id}`});
        return;
    }
    if (!shop.owners.includes(auth.userId)) {
        res.status(403).json({status: `User ${auth.userId} is not authorized to access Shop ${id}`});
        return;
    }
    shop = await Shop.findById(id).populate({path:'owners', select:'-passwordHash -salt'}).populate('items').populate('employees').exec();
    res.status(200).json({status: "OK", data: shop});
}