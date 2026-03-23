require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoute = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', contactRoute);

// Basic route for health check
app.get('/', (req, res) => {
  res.send('Portfolio API is running...');
});

// Database Connection
// Ensure we handle missing URI gracefully
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI || MONGO_URI === 'mongodb://placeholder' || MONGO_URI.includes('placeholder')) {
  console.log('WARNING: Using a placeholder MongoDB URI. Database connection blocked to prevent crash.');
  app.listen(PORT, () => console.log(`Server running on port ${PORT} (Without DB)`));
} else {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log('Connected to MongoDB');
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => {
      console.error('MongoDB connection error:', err);
      // fallback to run anyway just so Render knows it's up
      app.listen(PORT, () => console.log(`Server running on port ${PORT} (DB connection failed)`));
    });
}
