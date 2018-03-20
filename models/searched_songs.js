const sequelize = require("../config/connection.js");

module.exports = function(sequelize, datatypes){
  const searched_songs = sequelize.define('searched_songs', {
    song: datatypes.STRING,
    song_played: datatypes.BOOLEAN
  });
  return searched_songs;
}