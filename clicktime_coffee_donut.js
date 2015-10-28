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
    var clicktime_address = "282 2nd Street 4th floor, San Francisco, CA 94105";
    geocoder.geocode({'address': clicktime_address}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        destination = results[0].geometry.location;
        break
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  initMap();
});