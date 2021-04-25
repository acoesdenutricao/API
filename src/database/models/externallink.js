'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExternalLink extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.DocumentCategory, { foreignKey: 'DocumentCategoryId', as: 'categories_document' });
      this.belongsTo(models.User, { foreignKey: 'UserId', as: 'users' });
    }
  };
  ExternalLink.init({
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    DocumentCategoryId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ExternalLink',
  });
  return ExternalLink;
};