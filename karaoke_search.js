config = require('dotenv').config();

const keys = require('./keys.js');

const request = require('request');

const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);

spotify.search({ type: 'track', query: 'All the Small Things', limit: 5 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data);
console.log(data.tracks.items); 
});