'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('subtitles', [
      {
        name: "OBS",
        meaning: "Os indicadores e pontos de corte adotados para o diagnóstico dos indivíduos em qualquer fase do curso da vida deverão ser compatibilizados com os adotados pelo Ministério da Saúde.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Diagnóstico Nutricional ",
        meaning: "Identificação e avaliação do estado nutricional do usuário do SUS, elaborado com base em dados clínicos, bioquímicos, antropométricos e dietéticos, obtidos quando da avaliação nutricional e durante o acompanhamento individualizado",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "ACS",
        meaning: "Agentes Comunitários de Saúde",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "DHAA",
        meaning: "Direito Humano à Alimentação Adequada",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "ESF",
        meaning: "Equipes Saúde da Família",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "FLV",
        meaning: "Frutas, Legumes e Verduras",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "NASF",
        meaning: "Núcleos de Apoio à Saúde da Família",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "PPA",
        meaning: "Plano Plurianual",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "PPI",
        meaning: "Programação Pactuada e Integrada",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "SAN",
        meaning: "Segurança Alimentar e Nutricional",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "SIA-SUS",
        meaning: "Sistema de Informações Ambulatoriais do SUS",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "SIAB",
        meaning: "Sistema de Informação da Atenção Básica",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "SF",
        meaning: "Saúde da Família",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "SIH-SUS",
        meaning: "Sistema de Informações Hospitalares do SUS",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "SIM",
        meaning: "Sistema de Informação sobre Mortalidade",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "SINASC",
        meaning: "Sistema de Informações de Nascidos Vivos",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "SISVAN",
        meaning: "Sistema de Vigilância Alimentar e Nutricional",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "UBS",
        meaning: "Unidades Básicas de Saúde",
        created_at: new Date(),
        updated_at: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('subtitles', null, {});
  }
};
