import { db, dbName, tableName } from '../server.js';
import { validationResult } from 'express-validator';


export const addUser = (req, res) => {
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

    const sqlInsert = `INSERT 
        INTO ${tableName} (
            firstName,
             surname, 
             email, 
             telephone, 
             gender, 
             dateOfBirth, 
             comments
             ) VALUES (
                 "${firstName}", 
                 "${surname}", 
                 "${email}", 
                 "${telephone}", 
                 "${gender}", 
                 "${dateOfBirth}", 
                 "${comments}"
                 )`;

    db.query(sqlInsert, (err, results) => {
        if (err) throw err;
        res.status(200).send("1 record inserted")
        console.log(results);
    });
}

export const getUsers = (req, res) => {
    const sqlInsert = `SELECT * FROM ${dbName}.${tableName}`;

    db.query(sqlInsert, (err, results) => {
        res.send(results);
    });
}