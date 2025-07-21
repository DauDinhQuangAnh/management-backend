import express from 'express';
import { registerUser, loginUser } from '../controllers/user/login_logout';
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/', (req, res) => {
  res.json({ message: 'Danh sách users (mẫu)' });
});

export default router; 