const request = require("supertest");
const User = require("../../src/database/models/User");
const app = require('../../src/app');
const truncate = require('../utils/truncate');



describe('Authentication', () => {

  beforeEach(async ()=>{
    truncate();
  });

  
  it('should authenticate with valid credenstials', async () => {
    const user = await User.create({
      name: "Igor Braga",
      email: "igorbgalvan@hotmail.com",
      password: "12345678",
      role: 1
    }); 


    const response = await request(app)
      .post("/auth") 
      .send({
        email: "igorbgalvan@hotmail.com",
        password: "12345678"
      });

      expect(response.status).toBe(200);
  });
});