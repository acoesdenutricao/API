const request = require("supertest");
const app = require('../../src/app');
const User = require('../../src/database/models/User');
const factory = require('../utils/factories');
const truncate = require("../utils/truncate");


describe('Action Category', () => {
  beforeEach(async () =>{
    await truncate("user");
    await truncate("actionCategory");
  });

  it('should be created', async () => {


    const user = await factory.create('User', {
      password: "12345678",
    }); 

    const response = await request(app)
    .post("/action-categories") 
    .set("Authorization", `Bearer ${User.generateJwt(user)}`)
    .send({
      category: "Testando",
    });

    expect(response.status).toBe(201);
  });

  it('should be not created without', async () => {


    const user = await factory.create('User', {
      password: "12345678",
    }); 

    const response = await request(app)
    .post("/action-categories") 
    .set("Authorization", `Bearer ${User.generateJwt(user)}`)
    .send({
      email: "igorbgalvan@hotmail.com",
    });

    expect(response.status).toBe(400);
  });

  it('should be listed', async () => {
    const response = await request(app)
    .get("/action-categories");

    expect(response.status).toBe(200);
  });

  it('should be deleted', async () => {


    const user = await factory.create('User'); 

    const actionCategory = await factory.create("ActionCategory");

    const response = await request(app)
    .delete(`/action-categories/${actionCategory.id}`)
    .set("Authorization", `Bearer ${User.generateJwt(user)}`);

    expect(response.status).toBe(200);
  });

  it('should not be deleted', async () => {


    const user = await factory.create('User'); 

    const response = await request(app)
    .delete("/action-categories/1200")
    .set("Authorization", `Bearer ${User.generateJwt(user)}`);

    expect(response.status).toBe(400);
  });

  it('should be updated', async () => {


    const user = await factory.create('User'); 

    const actionCategory = await factory.create("ActionCategory");

    const response = await request(app)
    .put(`/action-categories/${actionCategory.id}`)
    .set("Authorization", `Bearer ${User.generateJwt(user)}`)
    .send({
      category: "testingUp"
    });

    expect(response.status).toBe(200);
  });

  it('should not be updated', async () => {


    const user = await factory.create('User'); 

    const response = await request(app)
    .put("/action-categories/1200")
    .set("Authorization", `Bearer ${User.generateJwt(user)}`);

    expect(response.status).toBe(400);
  });

});