const { Model, DataTypes } = require('sequelize');

class ExternalLink extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      url: DataTypes.STRING,
     }, {
      sequelize
    })
  }

  static associate(models){
      this.belongsTo(models.User, { foreignKey: "user_id"});
      this.belongsTo(models.DocumentCategory , { foreignKey: "document_category_id", as: 'external_links_categories'});
  }
}
module.exports = ExternalLink;