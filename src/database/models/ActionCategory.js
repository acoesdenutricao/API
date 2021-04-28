const { Model, DataTypes } = require('sequelize');

class ActionCategory extends Model {
  static init(sequelize) {
    super.init({
      category: DataTypes.STRING,
      range: DataTypes.STRING,
     }, {
      sequelize
    })
  }

  static associate(models){
    this.hasMany(models.Action, { foreignKey: "action_category_id", as: 'actions'});
  }
}
module.exports = ActionCategory;