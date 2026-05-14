const mysql = require('mysql2/promise');
const db = require('../database');

async function register(user){

    const connection = await db.Connect();

    const [rows] = await connection.query('INSERT INTO railway.Users (Username, Password, Email) VALUES (?, ?, ?)', 
        [user.username, user.hashedPassword, user.email]);

        connection.end();
        
        console.log(`Successfull query: connection ended.`)

        return rows;

}

async function login(email){

const connection = await db.Connect();
const [rows] = await connection.query('SELECT Username, Email FROM railway.Users WHERE Email = ?', [email]);
return rows[0];

}

async function userExists(Email){

const connection = await db.Connect();
const [rows] = await connection.query('SELECT Password, UserId FROM railway.Users WHERE Email = ?', [Email]);
if(rows.length>0){

    return rows[0];

}
else{
    
    return null;

}
}


async function getUser(username){

const connection = await db.Connect();
const [rows] = await connection.query('SELECT * FROM railway.Users WHERE Username = ?', [username]);
if(rows.length>0){

    return rows[0];

}
else{   

    return null;

}
}


module.exports = {register, login, getUser, userExists};


