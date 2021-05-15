const { Model, DataTypes } = require('sequelize');

class Subtitle extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      meaning: DataTypes.STRING,
     }, {
      sequelize
    })
  }

  static associate(models){
    this.belongsToMany(models.Action, {foreignKey: 'subtitle_id', through: 'action_subtitles', as: "actions"});
  }
}
module.exports = Subtitle;