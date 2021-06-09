const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization; 

        if (!authHeader) {n
            throw new Error('No token provided');
        }
        
        const [schema, token] = authHeader.split(' ');


        jwt.verify(token, process.env.API_SALT, (err, decoded) => {
            if (err) {
                throw new Error('Invalid token');
            }

            req.email = decoded.email;

            return next();
        });
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};