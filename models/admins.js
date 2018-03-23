const sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes){
  const admins = sequelize.define('admins', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    pass: DataTypes.STRING,
    admin_access: DataTypes.BOOLEAN
  });
  return admins;
}