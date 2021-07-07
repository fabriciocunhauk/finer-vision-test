import express from 'express';
import mysql from 'mysql';
import router from './routes/user.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const port = 3001;

const hostName = process.env.DB_HOST;
const userName = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
export const dbName = process.env.DB_NAME;
export const tableName = process.env.DB_TABLE_NAME;

const app = express();
app.use(cors());

app.use(express.json());

app.use('/', router);

//create connection to DB

export const db = mysql.createConnection({
    host: hostName,
    user: userName,
    password: password,
    database: dbName
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    db.connect((err) => {
        if (err) throw err;
        console.log('Database Connected');
    });
});
