'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return Promise.all([
          queryInterface.changeColumn('subtitles', 'meaning', {
            type: Sequelize.TEXT('long'),
            allowNull: false,
          })
      ]);
  },

  down: (queryInterface, Sequelize) => {
      return Promise.all([
          queryInterface.changeColumn('subtitles', 'meaning', {
            type: Sequelize.STRING,
            allowNull: false,
          })
      ]);
  }
};
