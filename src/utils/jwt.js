// JWT helper functions: sign and verify tokens
const jwt = require('jsonwebtoken');
// Secret for signing tokens (use strong secret in production)
const SECRET = process.env.JWT_SECRET || 'supersecret';

/**
 * Sign a JWT with given payload and default expiration
 */
function signToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: process.env.JWT_EXPIRATION || '1h' });
}

/**
 * Verify a JWT and return decoded payload
 */
function verifyToken(token) {
  return jwt.verify(token, SECRET);
}

module.exports = { signToken, verifyToken };
