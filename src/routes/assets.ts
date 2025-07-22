import express from 'express';
import { getAllDevice } from '../controllers/device/get_all_device';
import { addDevice } from '../controllers/device/add_device';
const router = express.Router();

router.get('/all', getAllDevice);
router.post('/add', addDevice);

export default router; 