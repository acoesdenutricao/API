const { Model, DataTypes } = require('sequelize');

class Action extends Model {
  static init(sequelize) {
    super.init({
      information: DataTypes.TEXT
     }, {
      sequelize
    })
  }

  static associate(models){
    this.hasMany(models.CategoryInformation, { foreignKey: "action_id", as: 'action_informations'});
    this.belongsToMany(models.Subtitle, {foreignKey: "action_id", through: 'action_subtitles', as: "subtitles"});
  }
}
module.exports = Action;