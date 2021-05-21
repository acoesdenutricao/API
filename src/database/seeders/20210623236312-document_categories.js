'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('document_categories', [
      {
        category: "Referências",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: "Documentos Técnicos",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: "Documentos Legais",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category: "Manuais de Apoio",
        created_at: new Date(),
        updated_at: new Date()
      },

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('document_categories', null, {});
  }
};
