const mysql = require('mysql2/promise')
const dotenv = require('dotenv')

dotenv.config();




async function Connect(){

    try {
        const connection = await mysql.createPool({
            database: process.env.DB,
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            port: process.env.PORT
        });

        return connection;
        
    } catch(error){
        console.error(`error connecting to database: ${error}`);
    }


    
}


process.on('SIGINT', async () => {
        
} )


module.exports = { Connect }