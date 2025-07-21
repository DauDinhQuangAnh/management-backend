import express from 'express';
const router = express.Router();

// Temporary routes
router.get('/', (req, res) => {
  res.json({ message: 'Devices route working' });
});

export default router; 