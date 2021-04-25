'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IntervationLevel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  IntervationLevel.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'IntervationLevel',
  });
  return IntervationLevel;
};