const { Model, DataTypes } = require('sequelize');

class IntervationLevel extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
     }, {
      sequelize
    })
  }

  static associate(models){
      this.hasMany(models.Information, { foreignKey: 'intervation_level_id', as: 'intevation_level_parent'});
  }
}
module.exports = IntervationLevel;