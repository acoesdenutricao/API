const request = require("supertest");
const app = require('../../src/app');
const factory = require('../utils/factories');
const User = require('../../src/database/models/User');
const truncate = require("../utils/truncate");

describe('Token JWT', () => {
  beforeEach(async () => {
    await truncate("user");
  });
  it('should access a private route', async () => {


    const user = await factory.create('User', {
      password: "12345678",
    });


    const response = await request(app)
      .get("/users")
      .set("Authorization", `Bearer ${User.generateJwt(user)}`);

    expect(response.status).toBe(200);
  });

  it('should not access a private route with invalid token', async () => {

    const user = await factory.create('User', {
      password: "12345678",
    });

    const response = await request(app)
      .get("/users")
      .set("Authorization", `Bearer ${12345}`);

    expect(response.status).toBe(500);
  });

  it('should not access a private route with no token provided', async () => {

    const user = await factory.create('User', {
      password: "12345678",
    });


    const response = await request(app)
      .get("/users");

    expect(response.status).toBe(500);
  });

});