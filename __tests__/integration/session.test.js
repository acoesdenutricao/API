const request = require("supertest");
const app = require('../../src/app');
const factory = require('../utils/factories');
const truncate = require("../utils/truncate");



describe('Authentication', () => {

  afterEach(async () => {
    await truncate("user");
  });

  beforeEach(async () => {
    await truncate("user");
  });

  it('should authenticate with valid credentials', async () => {
    const user = await factory.create('User', {
      password: "12345678",
    });


    const response = await (request(app)
      .post("/auth")
      .send({
        email: user.email,
        password: "12345678"
      }));

    expect(response.status).toBe(200);
  });

  it('should not authenticate with invalid password', async () => {

    const user = await factory.create('User', {
      password: "12345678",
    });


    const response = await request(app)
      .post("/auth")
      .send({
        email: user.email,
        password: "123456"
      });

    expect(response.status).toBe(500);
  });

  it('should not authenticate with invalid email', async () => {

    const user = await factory.create('User', {
      password: "12345678",
    });

    const response = await request(app)
      .post("/auth")
      .send({
        email: "igorgalvan@hotmail.com",
        password: "123456"
      });

    expect(response.status).toBe(500);
  });

  it('should not authenticate with invalid password', async () => {

    const user = await factory.create('User', {
      password: "12345678",
    });

    const response = await request(app)
      .post("/auth")
      .send({
        email: user.email,
        password: "123456"
      });

    expect(response.status).toBe(500);
  });

  it('should return a JWT when authenticated', async () => {

    const user = await factory.create('User', {
      password: "12345678",
    });

    const response = await request(app)
      .post("/auth")
      .send({
        email: user.email,
        password: "12345678"
      });

    expect(response.body).toHaveProperty('token');
  });
});