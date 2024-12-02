// routes/authRoutes.js
import { Router } from 'express';

const router = Router();

router.get('/global', (req, res) => {
    res.json({ message: 'This is a global route', user: req.user });
  });

export default router;