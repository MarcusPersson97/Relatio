const jwt = require('../Services/authServices');

function authMiddleware(req, res, next){

    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({message: "no token was provided"});
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verifyJwt(token);

    if(!decoded){
        return res.status(401).json({message: "token is invalid"});
    }

    req.user = decoded;
    next();


}



module.exports = {authMiddleware};