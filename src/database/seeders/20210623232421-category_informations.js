'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('category_informations', [
      {
        information_id: 3,
        action_category_id: 1,
        action_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 2,
        action_category_id: 2,
        action_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 3,
        action_category_id: 3,
        action_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 4,
        action_category_id: 4,
        action_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 5,
        action_category_id: 5,
        action_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 6,
        action_category_id: 6,
        action_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 7,
        action_category_id: 7,
        action_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 8,
        action_category_id: 8,
        action_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 9,
        action_category_id: 9,
        action_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 10,
        action_category_id: 1,
        action_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 11,
        action_category_id: 1,
        action_id: 11,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 12,
        action_category_id: 2,
        action_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 13,
        action_category_id: 3,
        action_id: 13,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 14,
        action_category_id: 4,
        action_id: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 15,
        action_category_id: 5,
        action_id: 15,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 16,
        action_category_id: 6,
        action_id: 16,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 17,
        action_category_id: 7,
        action_id: 17,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 18,
        action_category_id: 8,
        action_id: 18,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 19,
        action_category_id: 9,
        action_id: 19,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 20,
        action_category_id: 1,
        action_id: 20,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 21,
        action_category_id: 2,
        action_id: 21,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 22,
        action_category_id: 3,
        action_id: 22,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 23,
        action_category_id: 4,
        action_id: 23,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 24,
        action_category_id: 5,
        action_id: 24,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 25,
        action_category_id: 6,
        action_id: 25,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 26,
        action_category_id: 7,
        action_id: 26,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 27,
        action_category_id: 8,
        action_id: 27,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 28,
        action_category_id: 9,
        action_id: 28,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 29,
        action_category_id: 1,
        action_id: 29,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 30,
        action_category_id: 1,
        action_id: 30,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 31,
        action_category_id: 1,
        action_id: 31,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 32,
        action_category_id: 1,
        action_id: 32,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 33,
        action_category_id: 1,
        action_id: 33,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 34,
        action_category_id: 1,
        action_id: 34,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 35,
        action_category_id: 1,
        action_id: 35,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information_id: 36,
        action_category_id: 1,
        action_id: 36,
        created_at: new Date(),
        updated_at: new Date()
      },

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('category_informations', null, {});
  }
};
