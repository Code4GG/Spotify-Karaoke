config = require('dotenv').config();

const keys = require('./keys.js');

const request = require('request');

const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);

spotify.search({ type: 'track', query: req.body.songs , limit: 1 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data);
console.log(data.tracks.items); 
});

// "<iframe src='https://open.spotify.com/embed?uri=spotify:track:" + uri +  "width='300' height='80' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>"