const { Model, DataTypes } = require('sequelize');

class ActionCategory extends Model {
  static init(sequelize) {
    super.init({
      category: DataTypes.STRING,
     }, {
      sequelize
    })
  }

  static associate(models){
    this.hasMany(models.CategoryInformation, { foreignKey: "action_category_id", as: 'category_action_parent'});
  }
}
module.exports = ActionCategory;