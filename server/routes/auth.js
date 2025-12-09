import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Signup
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({ email, password: hashedPassword, name });

    const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: '1h' });

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (!existingUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: '1h' });

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

// Update Profile
router.patch('/update-profile', auth, async (req, res) => {
  try {
    const { name, email, phone, profileImage } = req.body;
    
    if (!req.userId) return res.status(401).json({ message: "Unauthenticated" });

    const updatedUser = await User.findByIdAndUpdate(
      req.userId, 
      { name, email, phone, profileImage }, 
      { new: true }
    );

    const token = jwt.sign({ email: updatedUser.email, id: updatedUser._id }, 'test', { expiresIn: '1h' });

    res.status(200).json({ result: updatedUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

// Change Password
router.post('/change-password', auth, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!req.userId) return res.status(401).json({ message: "Unauthenticated" });

    const user = await User.findById(req.userId);
    
    const isPasswordCorrect = await bcrypt.compare(currentPassword, user.password);
    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid current password" });

    const hashedPassword = await bcrypt.hash(newPassword, 12);
    
    await User.findByIdAndUpdate(req.userId, { password: hashedPassword });

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;
