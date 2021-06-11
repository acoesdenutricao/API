

const request = require("supertest");
const app = require('../../src/app');
const User = require('../../src/database/models/User');
const factory = require('../utils/factories');
const truncate = require("../utils/truncate");


describe('Document Category', () => {
  beforeEach(async () =>{
    await truncate("externalLink");
    await truncate("documentCategory");
    await truncate("user");
  });

  it('should be created', async () => {


    const user = await factory.create('User'); 

    const response = await request(app)
    .post("/document-categories") 
    .set("Authorization", `Bearer ${User.generateJwt(user)}`)
    .send({
      category: "teste"
    });

    expect(response.status).toBe(201);
  });

  it('should be not created without', async () => {


    const user = await factory.create('User'); 

    const response = await request(app)
    .post("/document-categories") 
    .set("Authorization", `Bearer ${User.generateJwt(user)}`)
    .send({
      email: "igorbgalvan@hotmail.com",
    });

    expect(response.status).toBe(400);
  });

  it('should be listed', async () => {
    const response = await request(app)
    .get("/document-categories");

    expect(response.status).toBe(200);
  });

  it('should be deleted', async () => {


    const user = await factory.create('User'); 

    const documentCategory = await factory.create("DocumentCategory");

    const response = await request(app)
    .delete(`/document-categories/${documentCategory.id}`)
    .set("Authorization", `Bearer ${User.generateJwt(user)}`);

    expect(response.status).toBe(200);
  });

  it('should not be deleted', async () => {


    const user = await factory.create('User'); 

    const response = await request(app)
    .delete("/document-categories/1200")
    .set("Authorization", `Bearer ${User.generateJwt(user)}`);

    expect(response.status).toBe(400);
  });

  it('should be updated', async () => {


    const user = await factory.create('User'); 

    const documentCategory = await factory.create("DocumentCategory");

    const response = await request(app)
    .put(`/document-categories/${documentCategory.id}`)
    .set("Authorization", `Bearer ${User.generateJwt(user)}`)
    .send({
      category: "testingUp"
    });

    expect(response.status).toBe(200);
  });

  it('should not be updated', async () => {

    const user = await factory.create('User'); 

    const response = await request(app)
    .put("/document-categories/1200")
    .set("Authorization", `Bearer ${User.generateJwt(user)}`);

    expect(response.status).toBe(400);
  });

});