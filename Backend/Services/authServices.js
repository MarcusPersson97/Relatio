const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

async function createJwt(user){

     const token = jwt.sign({userId: user.UserId},
                            {role: user.Role},
                            process.env.JWT_SECRET,
                            {expiresIn: '15m'});

    return token;
}

async function verifyJwt(token){
    
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        return decodedToken;

    } 
    
    catch (error) {
        console.error(error);
        return null;
    }
    


}











module.exports = {createJwt, verifyJwt};