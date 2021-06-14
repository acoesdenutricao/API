

const request = require("supertest");
const app = require('../../src/app');
const User = require('../../src/database/models/User');
const factory = require('../utils/factories');
const truncate = require("../utils/truncate");


describe('Intervation Level', () => {
  beforeEach(async () => {
    await truncate("user");
  });

  it('should be created', async () => {


    const user = await factory.create('User');
    const response = await request(app)
      .post("/intervation-levels")
      .set("Authorization", `Bearer ${User.generateJwt(user)}`)
      .send({
        title: "test",
        color: "#fff"
      });

    expect(response.status).toBe(201);
  });

  it('should not be created', async () => {

    const user = await factory.create('User');

    const response = await request(app)
      .post(`/intervation-levels`)
      .set("Authorization", `Bearer ${User.generateJwt(user)}`)
      .send({
        test: "test",
      });

    expect(response.status).toBe(400);
  });

  it('should be listed', async () => {
    const response = await request(app)
      .get("/intervation-levels");

    expect(response.status).toBe(200);
  });

  it('should be listed with id', async () => {
    const intervationLevel = await factory.create("IntervationLevel");
    const response = await request(app)
      .get(`/intervation-levels/${intervationLevel.id}`);

    expect(response.status).toBe(200);
  });

  it('should be not listed with id', async () => {
    const response = await request(app)
      .get(`/intervation-levels/1200`);

    expect(response.status).toBe(400);
  });

  it('should be deleted', async () => {


    const user = await factory.create('User');

    const intervationLevel = await factory.create("IntervationLevel");

    const response = await request(app)
      .delete(`/intervation-levels/${intervationLevel.id}`)
      .set("Authorization", `Bearer ${User.generateJwt(user)}`);

    expect(response.status).toBe(200);
  });

  it('should not be deleted', async () => {


    const user = await factory.create('User');

    const response = await request(app)
      .delete("/intervation-levels/1200")
      .set("Authorization", `Bearer ${User.generateJwt(user)}`);

    expect(response.status).toBe(400);
  });

  it('should be updated', async () => {


    const user = await factory.create('User');
    const intervationLevel = await factory.create("IntervationLevel");

    const response = await request(app)
      .put(`/intervation-levels/${intervationLevel.id}`)
      .set("Authorization", `Bearer ${User.generateJwt(user)}`)
      .send({
        title: "testingUp"
      });

    expect(response.status).toBe(200);
  });

  it('should not be updated', async () => {

    const user = await factory.create('User');

    const response = await request(app)
      .put("/intervation-levels/1200")
      .set("Authorization", `Bearer ${User.generateJwt(user)}`);

    expect(response.status).toBe(400);
  });

});