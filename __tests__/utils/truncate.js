const conn = require('../../src/database/index');

module.exports = () => {
  return Promise.all(Object.keys(conn.models).map(key => {
    return conn.models[key].destroy({
      truncate: true,
      force: true
    })
  }));
};