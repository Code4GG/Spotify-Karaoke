const sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes){
  const singers = sequelize.define('singers', {
    nickname: DataTypes.STRING,
    song: DataTypes.STRING,
  });


    singers.associate = function(models) {
    // We're saying that a Singers should belong to an Author
    // A Singers can't be created without an Author due to the foreign key constraint
    singers.belongsTo(models.users, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return singers;
}

