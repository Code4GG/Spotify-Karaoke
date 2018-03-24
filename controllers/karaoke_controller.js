const express = require("express");
const router = express.Router();
const singers = require('../models/singers.js');
const itunes = require('../models/itunes.js')
const users = require('../models/users.js');
const admins = require("../models/admin.js");
const searched_songs = require('../models/searched_songs.js');
const exhbs = require('express-handlebars');
const db = require('../models');

//redirects to index on load
router.get('/', function(req,res){
	db.singers.findAll({}).then(function(userData) {
		const singerObject = {
			Singers: userData
		}
		res.render("user", singerObject)
		console.log(userData);
	})
});

router.get('/admins', function(req,res){
	res.render("admin");
	console.log('admin page')
})

//gets all users in the database
router.get('/api/users', function(req,res){
	// res.json(req.body);
	db.users.findAll({}).then(function(results){
		return res.json(results);
	});
});

//display route
router.get('/admin_access', function(req,res){
	db.singers.findAll({}).then(function(userData) {
		const singerObject = {
			Singers: userData
		}
		res.render("admin_access", singerObject)
	})
})

router.post('/api/singers', function(req,res){
	const singers = req.body;
	console.log(users);
	db.singers.create({
		name: req.body.name,
		nickname: req.body.nickname,
		email: req.body.email,
		phone: req.body.phone,
		song_request: req.body.song_request,
		admin_access: false
	}).then(function(results){
		// res.render('user');
		// res.end();
	});
})

router.get('/api/singers', function(req,res){
	db.singers.findAll({}).then(function(results){
		return res.json(results);
	});
})

//used when users enter their data
router.post('/api/users', function(req,res){

	const users = req.body;
	console.log(users);
	db.users.create({
		name: req.body.name,
		nickname: req.body.nickname,
		email: req.body.email,
		phone: req.body.phone,
		song_request: req.body.song_request,
		admin_access: false
	}).then(function(results){
		res.render('user');
		// res.end();
	});
});

router.post('/api/ituneData', function(req,res){
	const itunes = req.body;
	db.itunes.create({
		album: req.body.album,
		country: req.body.country,
		genre: req.body.genre,
		album_cover: req.body.album_cover
	})
})
//used when admins create an account
router.post('/api/admins', function(req,res){
	
	const admins = req.body;
	db.admins.create({
		name: req.body.name,
		email: req.body.email,
		pass: req.body.pass,
		admin_access: true
	}).then(function(results){
		res.end();
	});
});
//used for when songs are searched
router.post('/api/searched_songs', function(res,res){
	const searched_songs = req.body
	db.searched_songs.create({
		song: req.body.song,
		song_played: false
	});
});

router.delete('/api/singers/:id', function(req, res) {

        	   db.singers.destroy({
                where: {
                    id: req.params.id
                }
            }).then(function(post){
                res.json(post);
    });
 });

module.exports = router;