const mysql = require('mysql2/promise');
const db = require('../database');



async function getMenu(){

    const connection = await db.Connect();

    const sven = `i could use the jwt token here where userid is stored and so refrence the user's tables`
    
    const [entities] = await connection.query('SELECT * FROM railway.Entities WHERE Id = ?', [sven]);

    return entities;
}

module.exports = {getEntities: getMenu};