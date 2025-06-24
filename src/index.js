// Entry point for the Authentication microservice
// Sets up Express, CORS, JSON parsing, and mounts auth routes
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
// Enable Cross-Origin Resource Sharing
app.use(cors());
// Parse incoming JSON requests
app.use(express.json());

// Mount authentication routes under /auth
app.use('/auth', authRoutes);

// Start server on configured port or default 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Auth service running on port ${PORT}`);
});

module.exports = app;
