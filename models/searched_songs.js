module.exports = function(sequelize, datatypes){
  const searched_songs = sequelize.define('searched_songs', {
    song: datatypes.STRING,
  });
  return searched_songs;
}