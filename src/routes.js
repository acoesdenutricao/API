const express = require('express');
const SampleController = require('./controllers/SampleController');

const routes = express.Router();

routes.get('/sample', SampleController.listar);

module.exports = routes;