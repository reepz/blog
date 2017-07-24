var city;
var country;
var lat;
var lon;

var temperature;
var key = "723c7e7a4559bfac33ca41ae731e3f29";

navigator.geolocation.getCurrentPosition(function(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;

  $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat="+ lat + "&lon=" + lon, function(jsonp) {
    temperature = jsonp.main.temp;
    $("#temperature").text("Current temperature in your location: " + temperature);
  });

  $.getJSON("https://api.darksky.net/forecast/" + key + "/" + lat + "," + lon, function(data) {
    $("#description").text(data.currently.summary);
  });

});
