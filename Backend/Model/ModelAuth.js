const mysql = require('mysql2/promise');
const db = require('../database');

async function register(user){


try {
    const connection = await db.Connect();

    const [rows] = await connection.query('INSERT INTO railway.Users (Username, Password, Email) VALUES (?, ?, ?)', 
        [user.username, user.hashedPassword, user.email]);

        connection.end();
        
        console.log(`Successfull query: connection ended.`)

        return rows;


    } catch(err){
    console.error(err.message);
}
}


module.exports = {register};