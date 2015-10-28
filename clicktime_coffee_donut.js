$(document).ready(function() {
  var origin;
  var destination;

  function init() {
    // Geocode the destination
    var geocoder = new google.maps.Geocoder();
    geocodeAddress(geocoder);
    // Find the Current Location w/ html5 geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        origin = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      }, function() {
        ;
      });
    }
    // Find places near Clicktime

    // Calculate route w/ waypoints and options
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;
    directionsDisplay.setPanel(document.getElementById('directions'));
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  }

  function geocodeAddress(geocoder) {
    var clicktime_address = "282 2nd Street 4th floor, San Francisco, CA 94105";
    geocoder.geocode({'address': clicktime_address}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        destination = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
      origin: origin,
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING
    }, function(response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  init();
});