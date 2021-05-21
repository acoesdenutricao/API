'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('informations', [
      {
        user_id: 1,
        approach_subject_id: 1,
        intervation_level_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 1,
        approach_subject_id: 1,
        intervation_level_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 1,
        approach_subject_id: 1,
        intervation_level_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 1,
        approach_subject_id: 1,
        intervation_level_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 1,
        approach_subject_id: 2,
        intervation_level_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 1,
        approach_subject_id: 2,
        intervation_level_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 1,
        approach_subject_id: 2,
        intervation_level_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 1,
        approach_subject_id: 2,
        intervation_level_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 1,
        approach_subject_id: 3,
        intervation_level_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 1,
        approach_subject_id: 3,
        intervation_level_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 1,
        approach_subject_id: 3,
        intervation_level_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 1,
        approach_subject_id: 3,
        intervation_level_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('informations', null, {});
  }
};
