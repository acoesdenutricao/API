const request = require("supertest");
const User = require("../../src/database/models/User");
const app = require('../../src/app');
const bcrypt = require("bcryptjs");
const factory = require('../utils/factories');


describe('User', () => {

  beforeEach( async () =>{
    await User.destroy({truncate: true, force: true})
  });

  it('should encrypt user password', async () => {
    const user = await factory.create('User', {
      password: "12345678",
    }); 
    
    expect(await bcrypt.compare('12345678', user.password)).toBe(true);
  });

  it('should be created', async () => {

    const response = await request(app)
    .post("/users") 
    .send({
      email: "igorbgalvan@hotmail.com",
      name: "Igor Braga",
      role: 1,
      password: "12345678"
    });

    expect(response.status).toBe(201);
  });

  it('should be deleted', async () => {

    const user = await factory.create('User', {
      password: "12345678",
    }); 

    const response = await request(app)
    .delete("/users/"+ user.id)
    .set("Authorization", `Bearer ${User.generateJwt(user)}`);

    expect(response.status).toBe(200);
  });

  it('user should not found in delete function', async () => {

    const user = await factory.create('User', {
      password: "12345678",
    }); 

    const response = await request(app)
    .delete("/users/1200")
    .set("Authorization", `Bearer ${User.generateJwt(user)}`);

    expect(response.status).toBe(400);
  });

});