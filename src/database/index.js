const Sequelize = require('sequelize');
const postgres = require('../config/database');

const Action = require('./models/action')
const ActionCategory = require('./models/actioncategory')
const ApproachSubject = require('./models/approachsubject')
const DocumentCategory = require('./models/documentcategory')
const ExternalLink = require('./models/externallink')
const IntervationLevel = require('./models/intervationlevel')
const Subtitle = require('./models/subtitle')
const User = require('./models/user')


const conn = new Sequelize(postgres);

Action.init(conn);
ActionCategory.init(conn);
ApproachSubject.init(conn);
DocumentCategory.init(conn);
ExternalLink.init(conn);
IntervationLevel.init(conn);
Subtitle.init(conn);
User.init(conn);


Action.associate(conn.models);
ActionCategory.associate(conn.models);
ApproachSubject.associate(conn.models);
DocumentCategory.associate(conn.models);
ExternalLink.associate(conn.models);
IntervationLevel.associate(conn.models);
Subtitle.associate(conn.models);
User.associate(conn.models);


module.exports = conn;