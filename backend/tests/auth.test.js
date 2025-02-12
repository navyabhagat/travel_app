const request = require('supertest');
const app = require('../../server');
const mongoose = require('mongoose');

describe('Auth API Tests', () => {
  let server;

  beforeAll(async () => {
    server = app.listen(5001);
  });

  afterAll(async () => {
    await mongoose.connection.close();
    server.close();
  });

  test('Register User', async () => {
    const res = await request(server)
      .post('/api/auth/register')
      .send({
        username: "testuser",
        email: "test@example.com",
        password: "mypassword"
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("message", "User registered successfully!");
  });

  test('Login User', async () => {
    const res = await request(server)
      .post('/api/auth/login')
      .send({
        email: "test@example.com",
        password: "mypassword"
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("token");
  });
});
