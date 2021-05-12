const { Model, DataTypes } = require('sequelize');

class CategoryInformation extends Model {
  static init(sequelize) {
    super.init({
      information_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: { model: 'informations', key: 'id' }
    },
      action_category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: { model: 'action_categories', key: 'id' }
    },
     }, {
      sequelize
    })
  }

  static associate(models){
    this.belongsTo(models.Information, { foreignKey: "information_id", as: 'information_category_son'});
    this.belongsTo(models.ActionCategory, { foreignKey: "action_category_id", as: 'action_category_son'});
  }
}
module.exports = CategoryInformation;