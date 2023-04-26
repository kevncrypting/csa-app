'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      Item.belongsToMany(models.Basket, {
        through: 'BasketItems',
        foreignKey: 'item_id',
      });
    }
  }
  Item.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};
