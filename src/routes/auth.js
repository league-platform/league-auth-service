    // Defines HTTP endpoints for signup, login, and logout
    const router = require('express').Router();
    const { signup, login, logout } = require('../controllers/authController');

    // Register a new user
    router.post('/signup', signup);
    // Authenticate existing user
    router.post('/login', login);
    // Invalidate user session / token
    router.post('/logout', logout);
    // Health check endpoint to verify the service is up and running
    router.get('/ping', (req, res) => {
    res.json({ message: 'pong', status: 'ok' });
    });

    module.exports = router;