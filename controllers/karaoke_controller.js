const express = require("express");
const router = express.Router();
const users = require('../models/users.js');
const admins = require("../models/admin.js");
const searched_songs = require('../models/searched_songs.js');

//redirects to index on load
router.get('/', function(req,res){
	res.redirect('/users');
});

router.get('api/users', function(req,res){
	users.findAll({}).then(function(results){
		res.json(results);
	});
});

router.post('/api/users', function(req,res){
	users.create({
		name: req.body.name,
		email: req.body.email,
		phone: req.body.phone,
		admin: false
	}).then(function(results){
		res.end();
	});
});

router.post('/api/admins', function(req,res){
	admins.create({
		name: req.body.name,
		email: req.body.email,
		pass: req.body.pass,
		admin_access: true
	}).then(function(results){
		res.end();
	})
});

router.post('/api/searched_songs', function(res,res){
	searched_songs.create({
		song: req.body.song
	})
})









module.exports = router;