// app.js
import dotenv from 'dotenv';
import express from 'express';
import authRoutes from './routes/authRoutes.js';
import protectedRoutes from './routes/protectedRoutes.js';
import globalRoutes from './routes/globalRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api', protectedRoutes);
app.use('/api', globalRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});