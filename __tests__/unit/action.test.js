const request = require("supertest");
const app = require('../../src/app');
const User = require('../../src/database/models/User');
const factory = require('../utils/factories');
const truncate = require("../utils/truncate");


describe('Action', () => {

 

  beforeEach(async () => {
    await truncate("user");
    await truncate("action");
  });

  it('should be created', async () => {

    const user = await factory.create('User', {
      password: "12345678",
    });

    const response = await request(app)
      .post("/actions")
      .set("Authorization", `Bearer ${User.generateJwt(user)}`)
      .send({
        information: "information of category",
      });

    expect(response.status).toBe(201);
  });

  it('should be not created without', async () => {

    const user = await factory.create('User', {
      password: "12345678",
    });

    const response = await request(app)
      .post("/actions")
      .set("Authorization", `Bearer ${User.generateJwt(user)}`)
      .send({
        email: "igorbgalvan@hotmail.com",
      });

    expect(response.status).toBe(400);
  });

  it('should be listed', async () => {
    const response = await request(app)
      .get("/actions");

    expect(response.status).toBe(200);
  });

  it('should be listed by id', async () => {

    const action = await factory.create("Action");

    const response = await request(app)
      .get(`/actions/${action.id}`);

      

    expect(response.status).toBe(200);
  });

  it('should be deleted', async () => {
    const user = await factory.create('User');

    const action = await factory.create("Action");

    const response = await request(app)
      .delete(`/actions/${action.id}`)
      .set("Authorization", `Bearer ${User.generateJwt(user)}`);

    expect(response.status).toBe(200);
  });

  it('should not be deleted', async () => {

    const user = await factory.create('User');

    const response = await request(app)
      .delete("/actions/1200")
      .set("Authorization", `Bearer ${User.generateJwt(user)}`);

    expect(response.status).toBe(400);
  });

  it('should be updated', async () => {

    const user = await factory.create('User');

    const action = await factory.create("Action");

    const response = await request(app)
      .put(`/actions/${action.id}`)
      .set("Authorization", `Bearer ${User.generateJwt(user)}`)
      .send({
        information: "testingUp"
      });

    expect(response.status).toBe(200);
  });

  it('should not be updated', async () => {
    const user = await factory.create('User');

    const response = await request(app)
      .put("/actions/1200")
      .set("Authorization", `Bearer ${User.generateJwt(user)}`);

    expect(response.status).toBe(400);
  });

  it('should subtitle not found', async () => {
    const user = await factory.create('User');

    const response = await request(app)
      .delete("/action/1/1123")
      .set("Authorization", `Bearer ${User.generateJwt(user)}`);

    expect(response.status).toBe(400);
  });

  it('should action not found', async () => {
    const user = await factory.create('User');

    const subtitle = await factory.create('Subtitle');

    const response = await request(app)
      .delete(`/action/1/${subtitle.id}`)
      .set("Authorization", `Bearer ${User.generateJwt(user)}`);

    expect(response.status).toBe(400);
  });

  it('should action be deleted', async () => {
    const user = await factory.create('User');

    const subtitle = await factory.create('Subtitle');
    const action = await factory.create('Action');

    const response = await request(app)
      .delete(`/action/${action.id}/${subtitle.id}`)
      .set("Authorization", `Bearer ${User.generateJwt(user)}`);

    expect(response.status).toBe(200);
  });

});