import express from 'express';
import { check, validationResult } from 'express-validator';
import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const hostName = process.env.DB_HOST;
const userName = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const tableName = process.env.DB_TABLE_NAME;

const app = express();
const port = 3001;

app.use(express.json());

//create connection to DB

const db = mysql.createConnection({
    host: hostName,
    user: userName,
    password: password,
    database: dbName
});

// DB details insertion

app.post('/', [
    check('firstName').notEmpty().withMessage('First name cannot be empty'),
    check('surname').notEmpty().withMessage('Surname cannot be empty'),
    check('email').isEmail().withMessage('You need to enter a valid email'),
    check('telephone').notEmpty().isLength({ min: 11 }).withMessage('Telephone cannot be empty or less than 11 digits long'),
    check('gender').notEmpty().withMessage('Gender cannot be empty'),
    check('dateOfBirth').notEmpty().withMessage('Date of birth cannot be empty'),
    check('comments').notEmpty().withMessage('Comments cannot be empty'),
], (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        console.log(errors);
        return res.status(400).json(errors);
    }

    const {
        firstName,
        surname,
        email,
        telephone,
        gender,
        dateOfBirth,
        comments } = req.body;

    const sqlInsert = `INSERT INTO ${tableName} (firstName, surname, email, telephone, gender, dateOfBirth, comments) VALUES ("${firstName}", "${surname}", "${email}", "${telephone}", "${gender}", "${dateOfBirth}", "${comments}")`;

    db.query(sqlInsert, (err, results) => {
        if (err) throw err;
        res.status(200).send("1 record inserted")
        console.log(results);
    });
});

// Get data from DB

app.get('/users', (req, res) => {
    const sqlInsert = `SELECT * FROM ${dbName}.${tableName}`;

    db.query(sqlInsert, (err, results) => {
        res.send(results);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    db.connect((err) => {
        if (err) throw err;
        console.log('Database Conected');
    });
});
