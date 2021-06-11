const { Model, DataTypes } = require('sequelize');

class Information extends Model {
  static init(sequelize) {
    super.init({
     }, {
      sequelize, tableName: 'informations',
    })
    
  }

  static associate(models){
      this.belongsTo(models.IntervationLevel, { foreignKey: 'intervation_level_id', as: 'information_intervation_levels'});
      this.belongsTo(models.ApproachSubject, { foreignKey: 'approach_subject_id', as: 'information_approach_subjects'});
      this.belongsTo(models.User, { foreignKey: 'user_id', as: 'information_users'});
      this.hasMany(models.CategoryInformation, { foreignKey: "information_id", as: 'information_categories'});
  }
}
module.exports = Information;