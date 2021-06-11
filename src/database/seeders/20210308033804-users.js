'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Igor Braga',
        email: 'igor@gmail.com',
        password: '$2a$10$03gBAtfGvAk9.rXm8cD99efwGsBCvcoR1KnOO6nNnNW84P9508K1y',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
