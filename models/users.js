const sequelize = require("../config/connection.js");

module.exports = function(sequelize, datatypes){
  const users = sequelize.define('users', {
    name: datatypes.STRING,
    nickname: datatypes.STRING,
    email: datatypes.STRING,
    phone: datatypes.STRING,
    song_request: datatypes.STRING,
    admin_access: datatypes.BOOLEAN,
  });
  return users;
}