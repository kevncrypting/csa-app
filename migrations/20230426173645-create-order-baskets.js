'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('OrderBaskets', {
      order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Orders',
          key: 'id',
        },
      },
      basket_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Baskets',
          key: 'id',
        },
      },
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('OrderBaskets');
  }
};
