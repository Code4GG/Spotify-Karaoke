// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const exphbs = require("express-handlebars");
const method = require('method-override');
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
// override with POST having ?_method=DELETE or PUT
app.use(method('_method'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Starts the server to begin listening
// =======
db.sequelize.sync().then(function(){
	app.listen(PORT, function() {
	  console.log("App listening on PORT " + PORT);
	});
})

