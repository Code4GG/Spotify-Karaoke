const sequelize = require("../config/connection.js");

module.exports = function(sequelize, datatypes){
  const singers = sequelize.define('singers', {
    name: datatypes.STRING,
    nickname: datatypes.STRING,
    email: datatypes.STRING,
    phone: datatypes.STRING,
    song_request: datatypes.STRING,
    admin_access: datatypes.BOOLEAN,
  });
  return singers;
}