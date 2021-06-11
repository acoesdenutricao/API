const { Model, DataTypes } = require('sequelize');

class CategoryInformation extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      information_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: { model: 'informations', key: 'id' }
      },
      action_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: { model: 'actions', key: 'id' }
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

  static associate(models) {
    this.belongsTo(models.Information, { foreignKey: "information_id", as: 'category_informations' });
    this.belongsTo(models.ActionCategory, { foreignKey: "action_category_id", as: 'category_information_category' });
    this.belongsTo(models.Action, { foreignKey: "action_id", as: 'category_information_actions' });
  }
}
module.exports = CategoryInformation;