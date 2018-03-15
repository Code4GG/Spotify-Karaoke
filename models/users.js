module.exports = function(sequelize, datatypes){
  const users = sequelize.define('users', {
    name: datatypes.STRING,
    email: datatypes.STRING,
    phone: datatypes.STRING,
    admin_access: datatypes.BOOLEAN
  });
  return users;
}