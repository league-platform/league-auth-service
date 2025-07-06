// src/__tests__/auth.test.js
const request = require('supertest');
const app = require('../index');

describe('Auth Service Endpoints', () => {
  let accessToken;

  it('POST /auth/signup → 201 { userId }', async () => {
    const res = await request(app)
      .post('/auth/signup')
      .send({ email: 'test@league.com', password: 'secret123' });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('userId');
  });

  it('POST /auth/login → 200 { accessToken, expiresIn }', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({ email: 'test@league.com', password: 'secret123' });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('accessToken');
    expect(res.body).toHaveProperty('expiresIn');
    accessToken = res.body.accessToken;
  });

  it('POST /auth/logout → 204', async () => {
    const res = await request(app)
      .post('/auth/logout')
      .set('Authorization', `Bearer ${accessToken}`);
    expect(res.statusCode).toBe(204);
  });
});
