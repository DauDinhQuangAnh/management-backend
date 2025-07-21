import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Danh sách devices (mẫu)' });
});

export default router; 