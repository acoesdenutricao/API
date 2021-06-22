'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('action_subtitles', [
      {
        action_id: 1,
        subtitle_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        action_id: 1,
        subtitle_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('action_subtitles', null, {});
  }
};
