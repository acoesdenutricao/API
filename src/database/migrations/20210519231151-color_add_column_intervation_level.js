'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('intervation_levels', 'color', {
       type: Sequelize.STRING,
       defaultValue: "#08a494",
      });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('intervation_levels', 'color');
  }
};
