// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
const sequelize = require("../config/connection.js");

// Creates a "Karaoke_user" model that matches up with DB
const Karaoke_users = sequelize.define("users", {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  admin_access: {
    type: Sequelize.BOOLEAN
  },
  created_at: {
    type: Sequelize.DATE
  },
}, {
  timestamps: false
});

const Karaoke_admins = sequelize.define("admins", {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  pass: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  admin_access: {
    type: Sequelize.BOOLEAN
  },
  created_at: {
    type: Sequelize.DATE
  }
}, {
  timestamps: false
});

const Karaoke_searched_songs = sequelize.define("searched_songs", {
  song: {
    type: Sequelize.STRING
  },
  created_at: {
    type: Sequelize.DATE
  }
}, {
  timestamps: false
});


// Syncs with DB
Karaoke_users.sync();
Karaoke_admins.sync();
Karaoke_searched_songs.sync();

// Makes the Karaoke Model available for other files (will also create a table)
module.exports = Karaoke_users;
module.exports = Karaoke_admins;
module.exports = Karaoke_searched_songs;