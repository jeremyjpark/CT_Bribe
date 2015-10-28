$(document).ready(function() {
  var map;
  var initialLocation;
  var browserSupportFlag = new Boolean();

  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: initialLocation.lat(), lng: initialLocation.lng()},
      zoom: 8
    });
  }

  if(navigator.geolocation) {
    browserSupportFlag = true;
    navigator.geolocation.getCurrentPosition(function(position) {
      initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
      map.setCenter(initialLocation);
    }, function() {
      handleNoGeolocation(browserSupportFlag);
    });
  }
  else {
    browserSupportFlag = false;
    handleNoGeolocation(browserSupportFlag);
  }

  function handleNoGeolocation(errorFlag) {
    if (errorFlag == true) {
      alert("Geolocation service failed.");
    } else {
      alert("Your browser doesn't support geolocation. We've placed you in Siberia.");
    }
    map.setCenter(initialLocation);
  }

  initMap();
});