const crypto =  require('crypto');
const jwt =  require('jsonwebtoken');
const User =  require('../api/models/user');

module.exports = {
    sha256: (data, salt) => crypto.createHash('sha256').update(data+salt).digest('hex'),
    getSalt: (size) => crypto.randomBytes(size).toString('hex'),
    validate: (req, fields) => {
        for (let i in fields)
            if (req.body[fields[i]] === undefined)
                return i;
        return -1;
    },
    auth: async (req) => {
        const bearerHeader = req.headers['authorization'];
        if (bearerHeader == undefined) return undefined;
        const bearerToken = bearerHeader.split(' ')[1];
        try {
            const decoded = jwt.verify(bearerToken, process.env.SECRET_KEY);
            if (await User.exists({_id: decoded.userId}))
                return decoded;
            else
                return null;
        } catch (err) {
            return null;
        }
    }
}