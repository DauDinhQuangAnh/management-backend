import express from 'express';
import { getAllDevice } from '../controllers/device/get_all_device';
const router = express.Router();

router.get('/all', getAllDevice);

export default router; 