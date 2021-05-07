const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
     }, {
      sequelize
    })
  }

  static associate(models){
    this.hasMany(models.ExternalLink, { foreignKey: "user_id", as: 'user_external_links'});
    this.hasMany(models.Information, { foreignKey: "user_id", as: 'user_information_parent'});
  }
}
module.exports = User;