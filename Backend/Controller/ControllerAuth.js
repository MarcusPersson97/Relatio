const authModel = require('../Model/ModelAuth');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltrounds = 10;

async function register(req, res){


    try {
        const {username, password, email } = req.body;
        if(!username || !password || !email){

           return res.status(400).json({message: "Bad request, username, password and email fields are required"});

        }
        
        const usernameAlreadyExists = await authModel.getUser(username);
        if(userAlreadyExists){
            return res.status(409).json({message: "A user with that username already exists"});
        }
        
        const emailAlreadyExists = await authModel.userExists(email);
        if(emailAlreadyExists){
            return res.status(409).json({message: "A user with that email already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, saltrounds);
        const user = {
            username,
            hashedPassword,
            email
        }

        const newUser = await authModel.register(user);
        return res.status(201).json({message: "user was successfully registered", newUser});
    } 
    
    catch (error) {
        console.error(error);
        res.status(500).json({message: "Server error"});
    }
    
}

async function login(req, res){

    const {email, password} = req.body;
    
    if(!email || !password){
       return res.status(400).json({message: "bad request, incorrect data"});

    }

    try {
        const storedUser = await authModel.userExists(email);
        if(!storedUser){
            return res.status(404).json({message: "user was not found"});
        }

        const isValidPassword = await bcrypt.compare(password, storedUser.Password);

        if(isValidPassword){
            const userInfo = await authModel.login(email);
            return res.status(200).json({message: "You successfully logged in", userInfo});
        }
        else{
            return res.status(401).json({message: "incorrect login credentials"});        
        }
    } 

    catch (error) {
        console.error(error);
        return res.status(500).json({message: "Server error", error: error.message});
    }

}



module.exports = {register, login};
