// Implements business logic: user registration, authentication, token management
const bcrypt = require('bcrypt');
const { signToken } = require('../utils/jwt');

// In-memory store for users (replace with a persistent DB in production)
const users = new Map();
// Default token expiration (1 hour)
const TOKEN_EXPIRATION = process.env.JWT_EXPIRATION || '1h';

/**
 * Register a new user
 *  - Check if user exists
 *  - Hash password
 *  - Store user record
 */
async function registerUser(email, password) {
  if (users.has(email)) {
    const err = new Error('User already exists');
    err.status = 409;
    throw err;
  }
  const hashed = await bcrypt.hash(password, 10);
  const user = { id: Date.now().toString(), email, password: hashed };
  users.set(email, user);
  return user;
}

/**
 * Authenticate an existing user
 *  - Verify password
 *  - Generate JWT
 */
async function authenticateUser(email, password) {
  const user = users.get(email);
  const passwordValid = user && await bcrypt.compare(password, user.password);
  if (!passwordValid) {
    const err = new Error('Invalid credentials');
    err.status = 401;
    throw err;
  }
  const token = signToken({ userId: user.id });
  return { token, expiresIn: TOKEN_EXPIRATION };
}

/**
 * Invalidate a token (stub for blacklist logic)
 */
async function invalidateToken(token) {
  // TODO: implement blacklist (e.g., store token in Redis until expiration)
}

module.exports = { registerUser, authenticateUser, invalidateToken, users };