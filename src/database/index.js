const Sequelize = require('sequelize');
const postgres = require('../config/database');

// const Action = require('../database/models/action');
// const ActionCategory = require('./models/actioncategory');
// const ApproachSubject = require('./models/approachsubject');
// const DocumentCategory = require('./models/documentcategory');
// const ExternalLink = require('./models/externallink');
// const IntervationLevel = require('./models/intervationlevel');
// const Subtitle = require('./models/subtitle');
const User = require('./models/User');
const DocumentCategory = require('./models/DocumentCategory');
const ExternalLink = require('./models/ExternalLink');


const conn = new Sequelize(postgres);


User.init(conn);
DocumentCategory.init(conn);
ExternalLink.init(conn);


User.associate(conn.models);
DocumentCategory.associate(conn.models);
ExternalLink.associate(conn.models);



module.exports = conn;