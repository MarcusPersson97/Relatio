const mysql = require('mysql2/promise');
const db = require('../database');

async function register(user){


const connection = await db.Connect();

const [rows] = await connection.query('INSERT INTO railway.users (Username, Password, Email) VALUES (?, ?, ?)', 
    [user.username, user.hashedPassword, user.email]);

    return rows;


}

module.exports = {register};