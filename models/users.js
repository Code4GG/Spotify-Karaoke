module.exports = function(sequelize, datatypes){
  const users = sequelize.define('users', {
  	nickname: datatypes.STRING,
    name: datatypes.STRING,
    nickname: datatypes.STRING,
    email: datatypes.STRING,
    phone: datatypes.STRING,
    admin_access: datatypes.BOOLEAN
  });
  return users;
}