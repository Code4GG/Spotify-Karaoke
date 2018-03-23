config = require('dotenv').config();

const router = express.Router();

const keys = require('./keys.js');

const request = require('request');





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
  
  //   $.ajax({
  //     url: 'https://api.spotify.com/v1/search?q=wild%20night',
  //     type: 'GET'
  //     headers: {
  //       Authorization: 'Bearer ' + keys
  //     },

  //   success: function(data) {
  //     console.log(data);
  //   }
  // });
