var conditions = ['clear sky', 'few clouds', 'scattered clouds', 'broken clouds', 'shower rain', 'rain', 'thunderstorm', 'snow', 'mist']

var city;
var country;
var lat;
var lon;

 $.getJSON("http://ip-api.com/json", function(json) {
   country = json.country;
   city = json.city;
   lat = json.lat;
   lon = json.lon;
 });

var temperature;
var description;
