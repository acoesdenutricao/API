'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('approach_subjects', 'icon_name', {
       type: Sequelize.STRING,
       defaultValue: "none",
      });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('approach_subjects', 'icon_name');
  }
};
