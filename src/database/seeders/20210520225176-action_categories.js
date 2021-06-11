'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('action_categories', [
      {
        category: "Ações Universais",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: "Gestantes",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: "0-6 meses",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: "7-24 meses",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: "25-60 meses",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: "> 5-9 anos",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: "Adolescentes (10-19 anos)",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: "Adultos (20-59 anos)",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: "Idosos (≥ 60 anos)",
        created_at: new Date(),
        updated_at: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('action_categories', null, {});
  }
};
