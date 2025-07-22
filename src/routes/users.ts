import express from 'express';
import { registerUser, loginUser } from '../controllers/user/login_logout';
import { getMe } from '../controllers/user/getmee';
import { editMe } from '../controllers/user/editme';
import { getAllUser } from '../controllers/user/get_all_user';
import { importUsers } from '../controllers/user/import_CSV_FLOW';
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', getMe);
router.put('/me', editMe);
router.get('/all', getAllUser);
router.post('/import', importUsers);

export default router; 