const request = require("supertest");
const User = require("../../src/database/models/User");
const app = require('../../src/app');
const bcrypt = require("bcryptjs");
const truncate = require('../utils/truncate');

describe('User', () => {

  beforeEach( async () =>{
    truncate();
  });

  it('should encrypt user password', async () => {
    const user = await User.create({
      name: "Igor Braga",
      email: "igorbgalvan@hotmail.com",
      password: "12345678",
      role: 1
    }); 
    
    expect(await bcrypt.compare('12345678', user.password)).toBe(true);
  });
});