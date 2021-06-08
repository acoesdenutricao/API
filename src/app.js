const express = require('express');
const routes = require('./routes');

require('dotenv').config({
  path: process.env.TEST_ENV === "test" ? ".env.test" : ".env.test"
});

require('./database');

const app = express();

app.use(express.json());
app.use(routes);


module.exports = app;