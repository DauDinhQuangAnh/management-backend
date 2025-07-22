import express from 'express';
import { registerUser, loginUser } from '../controllers/user/login_logout';
import { getMe } from '../controllers/user/getmee';
import { editMe } from '../controllers/user/editme';
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', getMe);
router.put('/me', editMe);

export default router; 