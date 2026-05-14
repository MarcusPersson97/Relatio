const jwt = require('jsonwebtoken');


async function createJwt(user){

     const token = jwt.sign({userId: user.UserId},
                            process.env.JWT_SECRET,
                            {expiresIn: '15m'});

    return token;
}

async function verifyJwt(){



}











module.exports = {createJwt, verifyJwt};