'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('document_categories', [
      {
        category: "Políticas",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: "Cartilhas, Guias e Manuais",
        created_at: new Date(),
        updated_at: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('document_categories', null, {});
  }
};
