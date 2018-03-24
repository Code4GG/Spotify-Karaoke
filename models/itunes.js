const sequelize = require("../config/connection.js");

module.exports = function(sequelize, datatypes){
  const itunesData = sequelize.define('itunes', {
    album: datatypes.STRING,
    country: datatypes.STRING,
    genre: datatypes.STRING,
    album_cover: datatypes.STRING,
  });
  return itunesData;
}