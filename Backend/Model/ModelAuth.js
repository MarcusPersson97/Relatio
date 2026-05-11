const mysql = require('mysql2/promise');
const db = require('../database');

async function register(user){


const connection = db.Connect();

const [rows] = await connection.execute('INSERT INTO railway.users (Username, Password, Email) VALUES (?, ?, ?)', 
    [user.username, user.hashedPassword, user.email]);
    
    return rows;


}

module.exports = {register};