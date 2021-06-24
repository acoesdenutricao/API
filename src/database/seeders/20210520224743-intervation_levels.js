'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('intervation_levels', [
      {
        title: "Diagnóstico",
        color: "#DBBE8C",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Prevenção de Doenças",
        color: "#B88DDC",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Promoção da Saúde",
        color: "#C6CC83",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Assistência, Tratamento e Cuidado",
        color: "#8CC8DB",
        created_at: new Date(),
        updated_at: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('intervation_levels', null, {});
  }
};
