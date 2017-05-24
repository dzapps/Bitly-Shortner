function get_short_url(long_url, login, api_key, func)
{
	$.getJSON(
		"http://api.bitly.com/v3/shorten?callback=?", 
		{ 
			"format": "json",
			"apiKey": api_key,
			"login": login,
			"longUrl": long_url
		},
		function(response)
		{
			func(response.data.url);
		}
		);
}

// A $( document ).ready() block.
$( document ).ready(function() {

	$("#url-submit").click(function(e){

		console.log('submit button clicked');

		e.preventDefault();

		var login = "cianebusiness";
		var api_key = "R_d8c9563b7a39909f91b33c8125281d26";
	    var long_url = $('#url').val();

	    get_short_url(long_url, login, api_key, function(short_url) {
	    	console.log(short_url);
			$('#url').val(short_url);
		});

	});

	$("#url-copy").click(function(e){

		console.log('copy button clicked');

		e.preventDefault();

		var url_short = $('#url').val();

	});

});