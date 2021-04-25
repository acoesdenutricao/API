'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Subtitle', [
      {
        name: 'Gabriel Martinez',
        meaning: 'gabriel@exemplo.com',
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subtitle', null, {});
  }
};
