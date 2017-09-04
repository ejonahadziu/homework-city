$(document).ready(function() {
	
	$('#submit-btn').click(Submit);


	function Submit () {
		var city = $('#city-type').val();
		displayImage(city);

		return false
	}

	function displayImage (city) {
		var imageCity;

		if (city = 'NYC' || 'New York' || 'New York City') {
			imageCity = '../images/nyc.jpg';
		} else if (city = 'San Francisco' || 'Bay Area' || 'SF') {
			$('body').addClass('sf');
		} else if (city = 'Los Angeles' || 'LA' || 'LAX') {
			imageCity = '../images/la.jpg';
		} else if (city = 'Austin' || 'ATX') {
			imageCity = '../images/austin.jpg';
		} else if (city = 'Sydney' || 'SYD') {
			imageCity = '../images/sydney.jpg';
		}
		$('body').css('background', 'url('+imageCity+')');
	}

});