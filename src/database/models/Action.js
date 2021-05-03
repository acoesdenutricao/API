const { Model, DataTypes } = require('sequelize');

class Action extends Model {
  static init(sequelize) {
    super.init({
      information: DataTypes.TEXT,
     }, {
      sequelize
    })
  }

  static associate(models){
    this.belongsTo(models.ActionCategory, { foreignKey: "action_category_id", as: 'action_categories_parent'});
    this.hasMany(models.ActionSubtitle, { foreignKey: "action_id", as: 'action_subtitle_parent'});
    this.hasMany(models.Information, { foreignKey: "action_id", as: 'action_information_parent'});
  }
}
module.exports = Action;