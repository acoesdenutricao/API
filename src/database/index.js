const Sequelize = require('sequelize');
const postgres = require('../config/database');

const Sample = require('./models/Sample');

const conn = new Sequelize(postgres);

Sample.init(conn);

module.exports = conn;