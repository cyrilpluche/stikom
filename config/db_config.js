
const { Client } = require('pg')
// TODO penser à modifier le .env
// TODO peut etre utiliser pg-promise
const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PWD,
    port: process.env.DB_PORT,
})
client.connect();

module.exports = client;