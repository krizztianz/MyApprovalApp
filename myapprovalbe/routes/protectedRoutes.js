// routes/authRoutes.js
import { Router } from 'express';
import { authenticateJWT } from '../middlewares/authMiddleware.js';

const router = Router();

router.get('/protected', authenticateJWT, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

export default router;