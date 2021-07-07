import express from 'express';
import { getUsers, addUser } from '../controllers/UserController.js';
import { createUserValidator } from '../validator.js';

const router = express.Router();

router.post('/', createUserValidator, addUser);
router.get('/users', getUsers);

export default router;