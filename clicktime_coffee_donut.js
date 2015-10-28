$(document).ready(function() {
var origin;
var destination 
function initMap() {
  // Geocode the destination
  var geocoder = new google.maps.Geocoder();
  geocodeAddress(geocoder);
  // Find the Current Location w/ html5 geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      origin = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
    }, function() {
      ;
    });
  }
  // Find places near Clicktime

  // Calculate route w/ waypoints and options
  }

  function geocodeAddress(geocoder) {

  }

  initMap();
});