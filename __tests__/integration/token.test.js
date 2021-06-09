const request = require("supertest");
const User = require("../../src/database/models/User");
const app = require('../../src/app');
const factory = require('../utils/factories');
const jwt = require('jsonwebtoken');

describe('Token JWT', () => {

  beforeEach( async () =>{
    await User.destroy({truncate: true, force: true})
  });

  it('jwt should be a corret token', async () => {

    const user = await factory.create("User", {
      password: "12345678"
    }); 


    const response = await request(app)
    .post("/auth") 
    .send({
      email: user.email,
      password: "12345678"
    });

    expect(jwt.verify(response.body.token, process.env.API_SALT)).toHaveProperty("email", user.email);
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