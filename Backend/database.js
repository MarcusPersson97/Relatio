const mysql = require('mysql2/promise')
const dotenv = require('dotenv')

dotenv.config();

async function Connect(){
    try {
    const connection =  mysql.createPool({
                database: process.env.DB,
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                port: process.env.PORT,
                waitForConnections: true,
                connectionLimit: 10,
                queueLimit: 0,
                enableKeepAlive: true,
                keepAliveInitialDelay: 0,

                ssl: {
                    rejectUnauthorized: false
                }
            });


            return connection;


    } catch(error){
        console.error(`error: ${error.message}`)
    }
}
   


process.on('SIGINT', async () => {
        
} )


module.exports = {Connect};