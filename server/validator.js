import { check } from 'express-validator';

export const createUserValidator = [
    check('firstName').notEmpty().withMessage('First name cannot be empty'),
    check('surname').notEmpty().withMessage('Surname cannot be empty'),
    check('email').isEmail().withMessage('You need to enter a valid email'),
    check('telephone').notEmpty().isLength({ min: 11 }).withMessage('Telephone cannot be empty or less than 11 digits long'),
    check('gender').notEmpty().withMessage('Gender cannot be empty'),
    check('dateOfBirth').notEmpty().withMessage('Date of birth cannot be empty'),
    check('comments').notEmpty().withMessage('Comments cannot be empty'),
];