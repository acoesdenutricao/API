'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DocumentCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.ExternalLink, { foreignKey: 'DocumentCategoryId', as: 'doc_links' });
    }
  };
  DocumentCategory.init({
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DocumentCategory',
  });
  return DocumentCategory;
};