

const request = require("supertest");
const app = require('../../src/app');
const User = require('../../src/database/models/User');
const factory = require('../utils/factories');
const truncate = require("../utils/truncate");


describe('Approach Subject', () => {
  beforeEach(async () =>{
    await truncate("user");
    await truncate("approachSubject");
  });

  it('should be created', async () => {


    const user = await factory.create('User'); 

    const response = await request(app)
    .post("/approach-subjects") 
    .set("Authorization", `Bearer ${User.generateJwt(user)}`)
    .send({
      subject: "teste"
    });

    expect(response.status).toBe(201);
  });

  it('should be not created without', async () => {


    const user = await factory.create('User', {
      password: "12345678",
    }); 

    const response = await request(app)
    .post("/approach-subjects") 
    .set("Authorization", `Bearer ${User.generateJwt(user)}`)
    .send({
      email: "igorbgalvan@hotmail.com",
    });

    expect(response.status).toBe(400);
  });

  it('should be listed', async () => {
    const response = await request(app)
    .get("/approach-subjects");

    expect(response.status).toBe(200);
  });

  it('should be listed by id', async () => {

    const approachSubject = await factory.create("ApproachSubject");

    const response = await request(app)
      .get(`/approach-subjects/${approachSubject.id}`);

    expect(response.status).toBe(200);
  });

  it('should not be listed by id', async () => {

    const response = await request(app)
      .get("/approach-subjects/1200");

    expect(response.status).toBe(400);
  });

  it('should be deleted', async () => {


    const user = await factory.create('User'); 

    const approachSubject = await factory.create("ApproachSubject");

    const response = await request(app)
    .delete(`/approach-subjects/${approachSubject.id}`)
    .set("Authorization", `Bearer ${User.generateJwt(user)}`);

    expect(response.status).toBe(200);
  });

  it('should not be deleted', async () => {


    const user = await factory.create('User'); 

    const response = await request(app)
    .delete("/approach-subjects/1200")
    .set("Authorization", `Bearer ${User.generateJwt(user)}`);

    expect(response.status).toBe(400);
  });

  it('should be updated', async () => {


    const user = await factory.create('User'); 

    const approachSubject = await factory.create("ApproachSubject");

    const response = await request(app)
    .put(`/approach-subjects/${approachSubject.id}`)
    .set("Authorization", `Bearer ${User.generateJwt(user)}`)
    .send({
      subject: "testingUp"
    });

    expect(response.status).toBe(200);
  });

  it('should not be updated', async () => {

    const user = await factory.create('User'); 

    const response = await request(app)
    .put("/approach-subjects/1200")
    .set("Authorization", `Bearer ${User.generateJwt(user)}`);

    expect(response.status).toBe(400);
  });

});