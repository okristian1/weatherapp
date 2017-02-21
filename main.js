//find browser lattitude and langitude
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
//query forecast using geolocation
      
        $("#C").hide();
        $("#F, #C").click(function () {
            $("#C, #F").toggle();
        });

var conditions = {"Patches of Fog": "haze-weather.png", 
                   "Shallow Fog": "haze-day",
                   "Overcast": "cloudy-weather",
                   "Clear": "clear day.png",
                   "Partly Cloudy": "partly-cloudy.png",
                   "Mostly Cloudy": "mostly-cloudy.png",
                   "Scattered CLouds": "clear-day-png",
                   "Small Hail": "rain-snow-day",
                   "Squalls": "rainy-day.png",
                   "Funnel Cloud": "cloudy-weather.png",
                   "Unknown Precipitation": "rain-snow-day.png",
                   "Unknown": "unknown.png",
                 };
        
        console.log(conditions["Patches of Fog"]);
        
        $.ajax({
            url: "https://api.wunderground.com/api/a7d14009c5f69a04/geolookup/conditions/q/" + position.coords.latitude + "," + position.coords.longitude + ".json",
            dataType: "jsonp",

            success: function (r) {
                console.log(r);
                var city = r.location.country_name;
                var adress = r.current_observation.observation_location.city;
                var tempc = Math.round(r.current_observation.temp_c);
                var tempf = Math.round(r.current_observation.temp_f);
                var summary = r.current_observation.weather;                
                var icon = conditions[summary];
                console.log(icon);

                $(".city").html(city);
                $(".adress").html(adress);
                $(".currentTempC").html(tempc + "°C");
                $(".currentTempF").html(tempf + "°F");
                $(".summary").html(summary);
                $(".icon").html('<img src=icons/' + icon + ' width="120px">');
            }
        }
              );
    });
  
}


 
