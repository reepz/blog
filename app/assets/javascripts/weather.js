var city;
var country;
var lat;
var lon;

var temperature;
var unit;

function convertTemperature() {
  if (unit === 'C') {
    temperature = (temperature * 9 / 5 + 32);
    unit = 'F';
  } else {
    temperature = Math.floor(((temperature - 32) * 5 / 9));
    unit = 'C';
  }
}

navigator.geolocation.getCurrentPosition(function(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;

  $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat="+ lat + "&lon=" + lon, function(jsonp) {
    temperature = Math.floor(jsonp.main.temp);
    unit = 'C';
    city = jsonp.name;
    console.log(jsonp);
    $("#temperature").text("Current temperature in " + city + ": " + temperature);
    $("#description").html("<img src=" + jsonp.weather[0].icon + ">");
  });

});

$(document).ready(function() {
  $("#converter-link").click(function(event) {
    event.preventDefault();
    convertTemperature();
    $("#temperature").text("Current temperature in " + city + ": " + temperature);
    $("#converter-link").text(unit);
  });
});
