import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import chatRoutes from './routes/chat.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);

app.get('/', (req, res) => {
  res.send('Hello from DALL-E 3D Portfolio Server!');
});

const startServer = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/portfolio'); 
    app.listen(5000, () => console.log('Server started on port 5000'));
  } catch (error) {
    console.log(error);
  }
};

startServer();
