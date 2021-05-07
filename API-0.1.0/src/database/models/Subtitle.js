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
    this.hasMany(models.ActionSubtitle, { foreignKey: 'subtitle_id', as: 'subtitle_parent'});
  }
}
module.exports = Subtitle;