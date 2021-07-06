import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const hostName = process.env.DB_HOST;
const userName = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const tableName = process.env.DB_TABLE_NAME;

//create DB

const connection = mysql.createConnection({
    host: hostName,
    user: userName,
    password: password,
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected');

    const createDB = `CREATE DATABASE ${dbName}`;

    connection.query(createDB, (err) => {
        if (err) throw err;
        console.log("Database created");

        connection.query(`USE ${dbName}`, function (err) {
            if (err) throw err;
            console.log("Database Selected");
        });

        const createTable = `CREATE TABLE ${tableName} (id INT NOT NULL AUTO_INCREMENT, firstName VARCHAR(20) NOT NULL, surname VARCHAR(40) NOT NULL, email VARCHAR(40) NOT NULL, telephone VARCHAR(40) NOT NULL, gender VARCHAR(10), dateOfBirth VARCHAR(10), comments VARCHAR(255) NOT NULL, PRIMARY KEY (id));`;

        connection.query(createTable, function (err) {
            if (err) throw err;
            console.log("Created Table");
        });

        connection.end();
    });
});