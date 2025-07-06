// Entry point for the Authentication microservice
require('dotenv').config(); // Load variables from .env file

// Sets up Express, CORS, JSON parsing, and mounts auth routes
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

console.log('🧪 MONGO_URI from .env :', process.env.MONGO_URI); 

const DB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/league-auth';
console.log('📦 Connecting to:', DB_URI);

const app = express();
// Enable Cross-Origin Resource Sharing
app.use(cors()); 
// Parse incoming JSON requests
app.use(express.json());

// Mount authentication routes under /auth
app.use('/auth', authRoutes);

// Connect to MongoDB
mongoose.connect(DB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
  
// Export the app for testing purposes
module.exports = app;

// Only start the server if this file is run directly
if (require.main === module) {
  // Start server on configured port or default 3000
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Auth service running on port ${PORT}`);
  });
}