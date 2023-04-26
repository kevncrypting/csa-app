'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('BasketItems', {
      basket_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Baskets',
          key: 'id',
        },
      },
      item_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Items',
          key: 'id',
        },
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('BasketItems');
  },
};
