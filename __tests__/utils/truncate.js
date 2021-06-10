const conn = require('../../src/database/index');
const User = require('../../src/database/models/User');
const ActionCategory = require('../../src/database/models/ActionCategory');
const Action = require('../../src/database/models/Action');

module.exports = (model) => {
  if (model == "user")
    return User.destroy({ truncate: true, force: true });
  else if (model == "actionCategory")
    return ActionCategory.destroy({ truncate: true, force: true });
  else if (model == "action")
    return Action.destroy({ truncate: true, force: true });
};