

const request = require("supertest");
const app = require('../../src/app');
const DocumentCategory = require("../../src/database/models/DocumentCategory");
const User = require('../../src/database/models/User');
const factory = require('../utils/factories');
const truncate = require("../utils/truncate");


describe('External Link', () => {
  beforeEach(async () =>{
    await truncate("externalLink");
    await truncate("user");
    await truncate("documentCategory");
  });

  it('should be created', async () => {

    const user = await factory.create('User'); 
    const documentCategory = await factory.create('DocumentCategory');

    const response = await request(app)
    .post(`/${user.id}/${documentCategory.id}/external-links`) 
    .set("Authorization", `Bearer ${User.generateJwt(user)}`)
    .send({
      name: "Google maps",
      url: "maps.google.com",
    });

    expect(response.status).toBe(201);
  });

  it('should be not created without user', async () => {


    const user = await factory.create('User'); 

    const response = await request(app)
    .post("/1/1/external-links") 
    .set("Authorization", `Bearer ${User.generateJwt(user)}`)
    .send({
      email: "igorbgalvan@hotmail.com",
    });

    expect(response.status).toBe(400);
  });

  it('should be not created without document category', async () => {

    const user = await factory.create('User'); 
    const response = await request(app)
    .post(`/${user.id}/1200/external-links`) 
    .set("Authorization", `Bearer ${User.generateJwt(user)}`)
    .send({
      name: "igorbgalvan@hotmail.com",
      url: "ioioweiwoeio"
    });

    expect(response.status).toBe(400);
  });


  it('should be listed by user', async () => {
    const user = await factory.create('User'); 
    const response = await request(app)
    .get(`/${user.id}/user-external-links`);

    expect(response.status).toBe(200);
  });

  it('should not be listed by user', async () => {
    const user = await factory.create('User'); 
    const response = await request(app)
    .get(`/1200/user-external-links`);

    expect(response.status).toBe(200);
  });

  it('should be listed by document category', async () => {
    const documentCategory = await factory.create('DocumentCategory');
    const response = await request(app)
    .get(`/${documentCategory.id}/category-external-links`);

    expect(response.status).toBe(200);
  });

  it('should not be listed by document category', async () => {
    const documentCategory = await factory.create('DocumentCategory');
    const response = await request(app)
    .get(`/1200/category-external-links`);

    expect(response.status).toBe(200);
  });

  it('should be deleted', async () => {
    const user = await factory.create('User'); 
    const documentCategory = await factory.create("DocumentCategory");
    const externalLink = await factory.create('ExternalLink', {
      user_id: user.id,
      document_category_id: documentCategory.id,
    });

    const response = await request(app)
    .delete(`/external-links/${externalLink.id}`)
    .set("Authorization", `Bearer ${User.generateJwt(user)}`);

    expect(response.status).toBe(200);
  });

  it('should not be deleted', async () => {


    const user = await factory.create('User'); 

    const response = await request(app)
    .delete("/external-links/1200")
    .set("Authorization", `Bearer ${User.generateJwt(user)}`);

    expect(response.status).toBe(400);
  });

  it('should be updated', async () => {

    const user = await factory.create('User'); 

    const documentCategory = await factory.create("DocumentCategory");

    const externalLink = await factory.create('ExternalLink', {
      user_id: user.id,
      document_category_id: documentCategory.id,
    });

    const response = await request(app)
    .put(`/external-links/${externalLink.id}`)
    .set("Authorization", `Bearer ${User.generateJwt(user)}`)
    .send({
      url: "testingUp.com"
    });

    expect(response.status).toBe(200);
  });

  it('should not be updated', async () => {

    const user = await factory.create('User'); 

    const response = await request(app)
    .put("/external-links/1200")
    .set("Authorization", `Bearer ${User.generateJwt(user)}`);

    expect(response.status).toBe(400);
  });

});