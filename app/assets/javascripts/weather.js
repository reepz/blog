var city;
var country;
var lat;
var lon;

var temperature;
var unit;

function convertTemperature() {
  if (unit === 'celsius') {
    temperature = (temperature * 9 / 5 + 32);
    unit = 'farhenheit';
  } else {
    temperature = ((temperature - 32) * 5 / 9);
    unit = 'celsius';
  }
}

navigator.geolocation.getCurrentPosition(function(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;

  $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat="+ lat + "&lon=" + lon, function(jsonp) {
    temperature = Math.floor(jsonp.main.temp);
    unit = 'celsius';
    city = jsonp.name;
    $("#temperature").text("Current temperature in " + city + ": " + temperature + " " + unit);
    $("#description").text(jsonp.weather[0].description);
  });

});

$(document).ready(function() {
  $("#converter").click(function() {
    convertTemperature();
    $("#temperature").text("Current temperature in " + city + ": " + temperature + " " + unit);
  });
});
