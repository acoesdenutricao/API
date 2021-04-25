'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ActionCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Action, { foreignKey: 'ActionCategoryId', as: 'actions' });
    }
  };
  ActionCategory.init({
    category: DataTypes.STRING,
    range: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ActionCategory',
  });
  return ActionCategory;
};