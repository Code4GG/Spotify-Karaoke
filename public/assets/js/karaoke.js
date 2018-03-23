$(document).ready(function() {



	// $('#.sub-btn')

	const song_request = $('#inputSong').val().trim();

	const queryURL = "https://api.spotify.com/v1/search"

	$.ajax({
		url: queryURL,
		type: "GET",
		headers: {
			'Authorization': 'Bearer' + "e831952584004b169b2409e20b584132:7c6ed504b50d4124954ede0f9976e8e1"
		}, 
		data: {
			q: 'song_request',
			type: 'track'
		},

		success: function(data) {
			console.log(data);
		}
	})
});