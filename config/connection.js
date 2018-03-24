

if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize')
    , sequelize = null

  if (process.env.JAWSDB_URL) {
    // the application is executed on Heroku ... use the postgres database
    sequelize = new Sequelize(process.env.JAWSDB_URL, {
      dialect:  'mysql',
      logging:  true //false
    })
  } else {
    // the application is executed on the local machine ... use mysql
    sequelize = new Sequelize('karaoke_db', 'root', null)
  }

  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    users:   sequelize.import(__dirname + '../models/users');
    admins:   sequelize.import(__dirname + '../models/admins');
    searched_songs:   sequelize.import(__dirname + '../models/searched_songs');
    singers:   sequelize.import(__dirname + '../models/singers');
    itunes:   sequelize.import(__dirname + '../models/itunes');

    // add your other models here
  }

  /*
    Associations can be defined here. E.g. like this:
    global.db.User.hasMany(global.db.SomethingElse)
  */
}

module.exports = global.db;

// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
// const Sequelize = require("sequelize");

// // Creates mySQL connection using Sequelize
// const sequelize = new Sequelize("karaoke_db", "root", "root", {
//   host: "localhost",
//   dialect: "mysql",
//   port: 3306,
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });

// // Exports the connection for other files to use
// module.exports = sequelize;
