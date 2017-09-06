 // When the user enters a city name on the input field 
 //And clicks on the update button
 //Then the user should see the background of the page according to the selection made (i.e if user selected NYC/New York/New York City, the background image should be nyc.jpg)
 // When the user enters a city name will all lower case letter or extra spaces on the input field 
 //And clicks on the update button
 //Then the user should see the background of the page according to the selection made
 //When the background gets updated 
 //Then the input field should be reset back to the orignial state (i.e "enter a city name" placeholder)

$(document).ready(function() {
	
	$('#submit-btn').click(Submit);

	function Submit () {
		var city = $('#city-type').val();
		displayImage(city);

		event.preventDefault();

		return false
	}

	function displayImage (city) {
		var imageCity;
		city = city.toUpperCase();
		city = city.trim();
		$('body')[0].className = '';

		if (city === 'NYC' || city === 'NEW YORK' || city === 'NEW YORK CITY') {
			imageCity = 'nyc'; // upper case letters used for all city options because of the toUpperCase validation
		} else if (city === 'SAN FRANCISCO' || city ==='BAY AREA' || city ==='SF') {
			imageCity = 'sf';
		} else if (city === 'LOS ANGELES' || city ==='LA' || city ==='LAX') {
			imageCity = 'la';
		} else if (city === 'AUSTIN' || city === 'ATX') {
			imageCity = 'austin';
		} else if (city === 'SYDNEY' || city ==='SYD') {
			imageCity = 'sydney';
		}
		$('body').addClass(imageCity);
		$('#city-type').val('');
	}

	// Remove extra spaces or new lines that users or the browser might add before or after their input
	// Reset the user input field after it is submitted

});