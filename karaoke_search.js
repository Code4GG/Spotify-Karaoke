config = require('dotenv').config();

const keys = require('./keys.js');

const request = require('request');

const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);

// spotify.search({ type: 'track', query: 'jeremy' , limit: 1 },
//  function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// console.log(data);
// console.log(data.tracks.items); 
// });

// "<iframe src='https://open.spotify.com/embed?uri=spotify:track:" + uri +  "width='300' height='80' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>"

    // Use your own token (this is just an example)
    var token = 'BQAYEJLwOQoF03BzsUP0dRHaduLOEx-hZgDZOnIYUq_cM59jLN3VHjTsIPgXeCU-geVfQsJeqJS6UCh4jWOgfJaCXXXXXXXXXXXXXXXXXXXXXXXev8ojT3QoT1gBTVSHA2BZoi0vccbyoLp8b'

    $.ajax({
      url: 'https://api.spotify.com/v1/search?type=artist&query=beatles',
      method: 'GET'
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    .done( function(response) {
      console.log(response);
    })