'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('intervation_levels', [
      {
        title: "Diagnóstico",
        color: "#08a494",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Prevenção de Doenças",
        color: "#08a494",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Promoção da Saúde",
        color: "#08a494",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Assistência, Tratamento e Cuidado",
        color: "#08a494",
        created_at: new Date(),
        updated_at: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('intervation_levels', null, {});
  }
};
