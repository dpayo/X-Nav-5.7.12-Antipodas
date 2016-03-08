

	latitude=0;
	long=0;
	lat_ant=0;
	long_ant=0;

	if (Modernizr.geolocation) {
		navigator.geolocation.getCurrentPosition(show_map);
	} else {
		alert("not supported!")
	}
	function show_map(position){
		 latitude = position.coords.latitude;
		 long=position.coords.longitude;
		 initMap();
		 lat_ant=-latitude;
		 long_ant=180-long
		 initMapAnti()
	}

	function initMap() {

	  // Create a map object and specify the DOM element for display.
	  var map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: latitude , lng: long},
	    scrollwheel: true,
	    zoom: 15
	  });
	}


	function initMapAnti() {
		// Create a map object and specify the DOM element for display.
		var map = new google.maps.Map(document.getElementById('map_ant'), {
			center: {lat: lat_ant , lng: long_ant},
			scrollwheel: true,
			zoom: 5
		});
	}
