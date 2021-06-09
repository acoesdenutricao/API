const app = require('./app');

app.listen(process.env.APP_PORT, '0.0.0.0', function() {
  console.log('Listening on port ' + process.env.APP_PORT)
});