const faker = require("faker");
const { factory } = require("factory-girl");
const User = require('../../src/database/models/User');
const ActionCategory = require('../../src/database/models/ActionCategory');
const Action = require("../../src/database/models/Action");
const Subtitle = require("../../src/database/models/Subtitle");
const ApproachSubject = require("../../src/database/models/ApproachSubject");
const DocumentCategory = require("../../src/database/models/DocumentCategory");
const ExternalLink = require("../../src/database/models/ExternalLink");
const IntervationLevel = require("../../src/database/models/IntervationLevel");
const Information = require("../../src/database/models/Information");

factory.define('User', User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  role: 1,
});

factory.define('ActionCategory', ActionCategory, {
  category: "test",
});

factory.define('ApproachSubject', ApproachSubject, {
  subject: "teste"
});

factory.define('DocumentCategory', DocumentCategory, {
  category: "test"
});

factory.define('ExternalLink', ExternalLink, {
  name: "Google maps",
  url: "maps.google.com",
  user_id: 1,
  document_category_id: 1
});

factory.define('IntervationLevel', IntervationLevel, {
  title: "test",
  color: "#FFF",
});

factory.define('Information', Information, {
  user_id: 1, 
  approach_subject_id: 1,
  intervation_level_id: 1,
  action_category_id: 1,
  action_id: 1
});

factory.define('Subtitle', Subtitle, {
  name: "test",
  meaning: "testing"
});

factory.define('Action', Action, {
  information: "information of action",
});

module.exports = factory;