// mysql 8.0.30
const mysql = require('mysql2');

const db = mysql.createConnection({
    "host":     process.env.DB_HOST,
    "port":     process.env.DB_PORT,
    "user":     process.env.DB_USER,
    "password": process.env.DB_PWD,
    "database": process.env.DB_DATABASE
});

db.connect();
module.exports = db.promise();