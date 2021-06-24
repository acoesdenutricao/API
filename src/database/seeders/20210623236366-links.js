'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('external_links', [
      {
        user_id: 1,
        document_category_id: 1,
        name: "Política Nacional de Atenção Básica",
        url:"https://aps.saude.gov.br/biblioteca/visualizar/MTE4OA==",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 1,
        document_category_id: 1,
        name: "Política Nacional de Alimentação e Nutrição",
        url:"https://aps.saude.gov.br/biblioteca/visualizar/MTE4Nw==",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 1,
        document_category_id: 1,
        name: "Política Nacional de Práticas Integrativas e Complementares no SUS - PNPIC-SUS: atitude de ampliação de acesso",
        url:"https://aps.saude.gov.br/biblioteca/visualizar/MTE4Ng==",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 1,
        document_category_id: 1,
        name: "Diretrizes da política nacional de saúde bucal",
        url:"https://aps.saude.gov.br/biblioteca/visualizar/MTE4NQ==",
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        user_id: 1,
        document_category_id: 2,
        name: "Guia alimentar para crianças brasileiras menores de dois anos",
        url:"https://aps.saude.gov.br/biblioteca/visualizar/MTQ0Ng==",
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        user_id: 1,
        document_category_id: 2,
        name: "Manual de Uso do Sistema com Prontuário Eletrônico do Cidadão",
        url:"http://aps.saude.gov.br/ape/esus/manual/",
        created_at: new Date(),
        updated_at: new Date()
      },

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('external_links', null, {});
  }
};
