// Handles HTTP requests, calls service layer, and sends responses
const authService = require('../services/authService');

/**
 * Handle user registration (signup)
 * Expects JSON { email, password }
 * Returns 201 with { userId }
 */
async function signup(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await authService.registerUser(email, password);
    res.status(201).json({ userId: user.id });
  } catch (err) {
    next(err);
  }
}

/**
 * Handle user login
 * Expects JSON { email, password }
 * Returns 200 with { accessToken, expiresIn }
 */
async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const { token, expiresIn } = await authService.authenticateUser(email, password);
    res.json({ accessToken: token, expiresIn });
  } catch (err) {
    next(err);
  }
}

/**
 * Handle user logout
 * Expects Bearer token in Authorization header
 * Returns 204 No Content
 */
async function logout(req, res, next) {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    await authService.invalidateToken(token);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
}

module.exports = { signup, login, logout };