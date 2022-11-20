import express from 'express';
import {createUser, getUserId, getUser, deleteUser, updateUser} from '../Controllers/users.js';


const router = express.Router();


//all routes in here start with /users
router.get('/', getUser);

router.post('/', createUser);

router.get('/:id',getUserId);

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

export default router;