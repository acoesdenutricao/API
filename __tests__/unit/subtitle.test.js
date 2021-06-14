

const request = require("supertest");
const app = require('../../src/app');
const User = require('../../src/database/models/User');
const factory = require('../utils/factories');
const truncate = require("../utils/truncate");


describe('Subtitle', () => {
  beforeEach(async () => {
    await truncate("subtitle");
    await truncate("action");
    await truncate("user");
    jest.setTimeout(15000)
  });

  it('should be created with action', async () => {

    const user = await factory.create('User');
    const action = await factory.create('Action'); 

    const response = await request(app)
      .post(`/action/${action.id}/subtitles`)
      .set("Authorization", `Bearer ${User.generateJwt(user)}`)
      .send({
        name: "name",
        meaning: "meaning"
      });

    expect(response.status).toBe(201);
  });

  it('should be created without action', async () => {
    const user = await factory.create('User');
    const response = await request(app)
      .post("/subtitles")
      .set("Authorization", `Bearer ${User.generateJwt(user)}`)
      .send({
        name: "name",
        meaning: "meaning"
      });

    expect(response.status).toBe(201);
  });

  it('should be not created without valid action', async () => {

    const user = await factory.create('User');

    const response = await request(app)
      .post(`/action/1200/subtitles`)
      .set("Authorization", `Bearer ${User.generateJwt(user)}`)
      .send({
        name: "name",
        meaning: "meaning"
      });

    expect(response.status).toBe(400);
  });

  it('should be listed', async () => {
    const response = await request(app)
      .get("/subtitles");

    expect(response.status).toBe(200);
  });

  it('should be deleted', async () => {


    const user = await factory.create('User');

    const subtitle = await factory.create("Subtitle");

    const response = await request(app)
      .delete(`/subtitles/${subtitle.id}`)
      .set("Authorization", `Bearer ${User.generateJwt(user)}`);

    expect(response.status).toBe(200);
  });

  it('should not be deleted', async () => {


    const user = await factory.create('User');

    const response = await request(app)
      .delete("/subtitles/1200")
      .set("Authorization", `Bearer ${User.generateJwt(user)}`);

    expect(response.status).toBe(400);
  });

  it('should be updated', async () => {


    const user = await factory.create('User');

    const subtitle = await factory.create("Subtitle");

    const response = await request(app)
      .put(`/subtitles/${subtitle.id}`)
      .set("Authorization", `Bearer ${User.generateJwt(user)}`)
      .send({
        name: "testingUp"
      });

    expect(response.status).toBe(200);
  });

  it('should not be updated', async () => {

    const user = await factory.create('User');

    const response = await request(app)
      .put("/subtitles/1200")
      .set("Authorization", `Bearer ${User.generateJwt(user)}`);

    expect(response.status).toBe(400);
  });

});