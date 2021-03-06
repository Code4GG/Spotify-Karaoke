
const sequelize = require("../config/connection.js");

module.exports = function(sequelize, datatypes){
  const admins = sequelize.define('admins', {
    name: datatypes.STRING,
    email: datatypes.STRING,
    pass: datatypes.STRING,
    admin_access: datatypes.BOOLEAN
  });
  return admins;
}