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

   $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat="+ lat + "&lon=" + lon, function(jsonp) {
     temperature = jsonp.main.temp;
     $("#temperature").append(temperature);
     $("#description").append(city);
     console.log(temperature);
     console.log(lat);
     console.log(lon);
   });

      //
      // $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat=35&lon=19&APPID=5b9f5435728ffd57f83e2571b497d1d2", function(jsonp) {
      //   temperature = jsonp.main.temp;
      //   $("#temperature").append(temperature);
      //   $("#description").append(city);
      //   console.log(temperature);
      //   console.log(lat);
      //   console.log(lon);
      // });

 });
