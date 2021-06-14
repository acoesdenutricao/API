const conn = require('../../src/database/index');
const User = require('../../src/database/models/User');
const ActionCategory = require('../../src/database/models/ActionCategory');
const Action = require('../../src/database/models/Action');
const ApproachSubject = require('../../src/database/models/ApproachSubject');
const DocumentCategory = require('../../src/database/models/DocumentCategory');
const ExternalLink = require('../../src/database/models/ExternalLink');
const Subtitle = require('../../src/database/models/Subtitle');
const IntervationLevel = require('../../src/database/models/IntervationLevel');
const Information = require('../../src/database/models/Information');


module.exports = (model) => {
  if (model == "user")
    return User.destroy({ truncate: true, force: true });
  else if (model == "actionCategory")
    return ActionCategory.destroy({ truncate: true, force: true });
  else if (model == "action")
    return Action.destroy({ truncate: true, force: true });
  else if (model == "approachSubject")
    return ApproachSubject.destroy({ truncate: true, force: true });
  else if (model == "documentCategory")
    return DocumentCategory.destroy({ truncate: true, force: true });
  else if (model == "externalLink")
    return ExternalLink.destroy({ truncate: true, force: true });
  else if (model == "subtitle")
    return Subtitle.destroy({ truncate: true, force: true });
  else if (model == "intervationLevel")
    return IntervationLevel.destroy({ truncate: true, force: true });
  else if (model == "information")
    return Information.destroy({ truncate: true, force: true });
};