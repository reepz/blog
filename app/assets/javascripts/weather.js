var conditions = ['clear sky', 'few clouds', 'scattered clouds', 'broken clouds', 'shower rain', 'rain', 'thunderstorm', 'snow', 'mist']

var city;
var country;
var lat;
var lon;

var temperature;

 $.getJSON("http://ip-api.com/json", function(json) {
   country = json.country;
   city = json.city;
   lat = json.lat;
   lon = json.lon;

   $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat="+ lat + "&lon=" + lon "?output=jsonp&callback=?", function(json) {
     temperature = json.main.temp;
     $("#temperature").append(temperature);
     console.log(temperature);
   });
 });

var temperature;
var description;
