const { Model, DataTypes } = require('sequelize');

class ApproachSubject extends Model {
  static init(sequelize) {
    super.init({
      subject: DataTypes.STRING,
     }, {
      sequelize
    })
  }

  static associate(models){
      this.hasMany(models.Information, { foreignKey: 'approach_subject_id', as: 'approach_subject_parent'});
  }
}
module.exports = ApproachSubject;