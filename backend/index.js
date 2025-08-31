const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const connectDB = require('./config/db');
const User = require('./models/User');
const courseRoutes = require('./routes/courseRoutes');

const app = express();

const cors = require('cors');

// Connect to MongoDB
connectDB();

// Middleware
const corsOptions = {
  origin: ['https://edu-matrix-pied.vercel.app'],
  credentials: true,
};

app.use(cors(corsOptions));
// Handle preflight requests for all routes
app.options('*', cors(corsOptions));
app.use(express.json());

// Welcome route
app.get('/', (req, res) => {
  res.send('🎉 Welcome to the EduMatrix API!');
});

// Course routes
app.use('/courses', courseRoutes);

// Get all users (excluding passwords)
app.get('/users', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ message: 'Server error while fetching users' });
  }
});

// DELETE /users/:id - Delete user by ID
app.delete('/users/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error('Error deleting user:', err);
    return res.status(500).json({ message: 'Server error while deleting user' });
  }
});


// Signup route
app.post('/signup', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ message: 'Server error during signup' });
  }
});

// Login route
app.post('/', async (req, res) => {
  try {
    const { email, password, role } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    if (user.role !== role) {
      return res.status(403).json({ message: 'Role mismatch' });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, 'your_jwt_secret', {
      expiresIn: '2h',
    });

    res.json({
      token,
      role: user.role,
      email: user.email,
      name: user.name,
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error during login' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
