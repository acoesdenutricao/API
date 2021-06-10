const faker = require("faker");
const { factory } = require("factory-girl");
const User = require('../../src/database/models/User');
const ActionCategory = require('../../src/database/models/ActionCategory');
const Action = require("../../src/database/models/Action");

factory.define('User', User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  role: 1,
});

factory.define('ActionCategory', ActionCategory, {
  category: "test",
});

factory.define('Action', Action, {
  information: "information of action",
});

module.exports = factory;