const authModel = require('../Model/ModelAuth');
const bcrypt = require('bcrypt');
const saltrounds = 10;

async function register(req, res){

    

    try {
        const {username, password, email } = req.body;
        if(!username || !password || !email){

           return res.status(400).json({message: "Bad request, username, password and email fields are required"});

        }

        const hashedPassword = bcrypt.hash(password, saltrounds);
        const user = {
            username,
            hashedPassword,
            email
        }

        newUser = await authModel.register(user);
        return res.status(201).json({message: "user was successfully registered", newUser});
    } 
    
    catch (error) {
        console.error(error);
        res.status(500).json({message: "Server error"});
    }
    
}




module.exports = {register};
