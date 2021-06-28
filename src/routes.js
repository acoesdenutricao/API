const express = require('express');
const SampleController = require('./controllers/SampleController');

const routes = express.Router();
const path = require('path');

routes.get('/docs', function (req, res) { return res.sendFile(path.join(__dirname + '/templates/docs.html')); });

module.exports = routes;