const truncate = require("../utils/truncate");
const factory = require("../utils/factories");
const request = require("supertest");
const app = require('../../src/app');
const User = require('../../src/database/models/User');


describe('Information', () => {

  beforeEach(async () =>{
    await truncate('information');
    await truncate('user');
    jest.setTimeout(15000)
  })

  it('should be created', async () => {

    const user = await factory.create('User');
    const approachSubject = await factory.create('ApproachSubject')
    const intervationLevel = await factory.create('IntervationLevel')
    const actionCategory = await factory.create('ActionCategory')
    const action = await factory.create('Action')
  
    const response = await request(app)
    .post("/informations")
    .set("Authorization", `Bearer ${User.generateJwt(user)}`)
    .send({
      user_id: user.id, 
      approach_subject_id: approachSubject.id, 
      intervation_level_id: intervationLevel.id, 
      action_category_id: actionCategory.id, 
      action_id: action.id
    });

    expect(response.status).toBe(201);
  });

    it('should be not created', async () => {

    const user = await factory.create('User');
    const approachSubject = await factory.create('ApproachSubject')
    const intervationLevel = await factory.create('IntervationLevel')
    const actionCategory = await factory.create('ActionCategory')
    const action = await factory.create('Action')
  
    const response = await request(app)
    .post("/informations")
    .set("Authorization", `Bearer ${User.generateJwt(user)}`)
    .send();

    expect(response.status).toBe(400);
  });

  it('should be deleted', async () => {

    const user = await factory.create('User');
    const approachSubject = await factory.create('ApproachSubject')
    const intervationLevel = await factory.create('IntervationLevel')
    const actionCategory = await factory.create('ActionCategory')
    const action = await factory.create('Action')

    const response = await request(app)
    .post("/informations")
    .set("Authorization", `Bearer ${User.generateJwt(user)}`)
    .send({
      user_id: user.id, 
      approach_subject_id: approachSubject.id, 
      intervation_level_id: intervationLevel.id, 
      action_category_id: actionCategory.id, 
      action_id: action.id
    });
  
    const response1 = await request(app)
    .delete(`/information/categories/${response.body.category_information.id}`)
    .set("Authorization", `Bearer ${User.generateJwt(user)}`);

    expect(response1.status).toBe(200);
  });

  it('should be not deleted', async () => {

    const user = await factory.create('User');
  
    const response = await request(app)
    .delete(`/information/categories/1200`)
    .set("Authorization", `Bearer ${User.generateJwt(user)}`);

    expect(response.status).toBe(400);
  });

  it('should be listed', async () => {

    const response = await request(app)
    .get(`/informations`);

    expect(response.status).toBe(200);
  });

  it('should be listed with filters', async () => {

    const approachSubject = await factory.create('ApproachSubject')
    const intervationLevel = await factory.create('IntervationLevel')

    const response = await request(app)
    .get(`/information/${approachSubject.id}/${intervationLevel.id}/categories`);

    expect(response.status).toBe(200);
  });

  it('should not be listed without approach subject', async () => {
    const intervationLevel = await factory.create('IntervationLevel')

    const response = await request(app)
    .get(`/information/1200/${intervationLevel.id}/categories`);

    expect(response.status).toBe(200);
  });

  it('should not be listed without intervation level', async () => {
    const approachSubject = await factory.create('ApproachSubject')

    const response = await request(app)
    .get(`/information/${approachSubject.id}/1200/categories`);

    expect(response.status).toBe(200);
  });

  it('should be action listed', async () => {

    const user = await factory.create('User');
    const approachSubject = await factory.create('ApproachSubject')
    const intervationLevel = await factory.create('IntervationLevel')
    const actionCategory = await factory.create('ActionCategory')
    const action = await factory.create('Action')

    const response = await request(app)
    .post("/informations")
    .set("Authorization", `Bearer ${User.generateJwt(user)}`)
    .send({
      user_id: user.id, 
      approach_subject_id: approachSubject.id, 
      intervation_level_id: intervationLevel.id, 
      action_category_id: actionCategory.id, 
      action_id: action.id
    });

    const response1 = await request(app)
    .get(`/information/action/${response.body.category_information.id}`);

    expect(response1.status).toBe(200);
  });

});