'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('approach_subjects', [
      {
        subject: "Indivíduo",
        icon_name: "account-outline",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        subject: "Família",
        icon_name: "account-group-outline",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        subject: "Comunidade",
        icon_name: "google-circles-communities",
        created_at: new Date(),
        updated_at: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('approach_subjects', null, {});
  }
};