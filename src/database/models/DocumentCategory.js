const { Model, DataTypes } = require('sequelize');

class DocumentCategory extends Model {
  static init(sequelize) {
    super.init({
      category: DataTypes.STRING,
     }, {
      sequelize
    })
  }

  static associate(models){
    this.hasMany(models.ExternalLink, { foreignKey: "document_category_id", as: 'category_external_links'});
  }
}
module.exports = DocumentCategory;