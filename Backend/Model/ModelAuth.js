const mysql = require('mysql2/promise');
const db = require('../database');

async function register(user){
const connection = await db.Connect();

const [rows] = await connection.query('INSERT INTO railway.users (Username, Password, Email) VALUES (?, ?, ?)', 
    [user.username, user.hashedPassword, user.email]);

    return rows;


}

async function login(username){

const [rows] = await connection.query('SELECT username, email FROM railway.users WHERE username = ?', [username]);
return rows[0];

}

async function userExists(username){

const [rows] = await connection.query('SELECT password FROM railway.users WHERE username = ?', [username]);
if(rows.length>0){

    return rows[0];

}
else{
    
    return null;

}
}

async function getUser(username){

const [rows] = await connection.query('SELECT * FROM railway.users WHERE username = ?', [username]);
if(rows.length>0){

    return rows[0];

}
else{

    return null;

}
}


module.exports = {register, login, getUser, userExists};