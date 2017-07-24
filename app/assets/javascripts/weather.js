var conditions = ['clear sky', 'few clouds', 'scattered clouds', 'broken clouds', 'shower rain', 'rain', 'thunderstorm', 'snow', 'mist']

var city;
var country;
var lat;
var lon;

var temperature;

navigator.geolocation.getCurrentPosition(function(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;

  $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat="+ lat + "&lon=" + lon, function(jsonp) {
    temperature = jsonp.main.temp;
    $("#temperature").append(temperature);
    $("#description").append(city);
    console.log(temperature);
    console.log(lat);
    console.log(lon);
  });
});
