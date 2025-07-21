import express from 'express';
const router = express.Router();

// Temporary routes
router.get('/', (req, res) => {
  res.json({ message: 'Users route working' });
});

export default router; 