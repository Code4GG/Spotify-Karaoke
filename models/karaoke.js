// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
const sequelize = require("../config/connection.js");

// Creates a "Karaoke_user" model that matches up with DB
const Karaoke_user = sequelize.define("users", {
  author: {
    type: Sequelize.STRING
  },
  body: {
    type: Sequelize.STRING
  },
  created_at: {
    type: Sequelize.DATE
  }
}, {
  timestamps: false
});


// Syncs with DB
Karaoke.sync();

// Makes the Karaoke Model available for other files (will also create a table)
module.exports = Karaoke;