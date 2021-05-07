const { Model, DataTypes } = require('sequelize');

class ActionSubtitle extends Model {
  static init(sequelize) {
    super.init({
     }, {
      sequelize
    })
  }

  static associate(models){
    this.belongsTo(models.Subtitle, { foreignKey: "subtitle_id", as: 'subtitle_son'});
    this.belongsTo(models.Action, { foreignKey: "action_id", as: 'action_son'});
  }
}
module.exports = ActionSubtitle;