const { Model, DataTypes } = require('sequelize');

class Information extends Model {
  static init(sequelize) {
    super.init({
     }, {
      sequelize, tableName: 'informations',
    })
    
  }

  static associate(models){
      this.belongsTo(models.Action, { foreignKey: 'action_id', as: 'action_information_son'});
      this.belongsTo(models.IntervationLevel, { foreignKey: 'intervation_level_id', as: 'intervation_level_son'});
      this.belongsTo(models.ApproachSubject, { foreignKey: 'approach_subject_id', as: 'approach_subject_son'});
      this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user_information_son'});
      this.hasMany(models.CategoryInformation, { foreignKey: "information_id", as: 'category_information_parent'});
  }
}
module.exports = Information;