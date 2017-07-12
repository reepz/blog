var conditions = ['clear sky', 'few clouds', 'scattered clouds', 'broken clouds', 'shower rain', 'rain', 'thunderstorm', 'snow', 'mist']

var city;
var country;

 $.getJSON("http://ip-api.com/json", function(json) {

   country = json.country;
   city = json.city;

   $(".location").text(city + ", " + country);
});



var key = '5b9f5435728ffd57f83e2571b497d1d2';
var temperature;
var description;

$(document).ready(function() {
  $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + key, function(json) {

    temperature = json.main.temp;
    description = json.weather['0'].description;

    $("#temperature").text("Current temperature: " + temperature);
    $("#description").text(description);
  });
});
