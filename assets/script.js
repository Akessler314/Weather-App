// standard API 
var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=salt%20lake%20city%20&appid=dc726fd3d02ce0beabb35f8feeef04c7';
// array to hold the searched cities 
var cities = [];
// var to grab the date 
var day = new Date().toDateString() ;
var tomorrow = (new Date() +1) ;

$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function (response) {
    console.log(response)

    $('.city').html("<h1>" + "City: " + response.name + "</h1>")
    //converts the defult meters per seconds wind speed to mph 
    var windMPH = (response.wind.speed * 2.237)

    $(".wind").text("Wind Speed: " + windMPH.toFixed(1) + " Miles per Hour");
    $(".humidity").text("Humidity: " + response.main.humidity + "%");
    //var to store conversion from kelvin to farenhite 
    var tempF = (response.main.temp - 273.15) * 1.80 + 32;
    //var to get the low for the day and convert it to F 
    var tempFLow = (response.main.temp_min - 273.15) * 1.80 + 32;
    //var to get the high for the day and convert it to F 
    var tempFLow = (response.main.temp_max - 273.15) * 1.80 + 32;
    //displays the current temp in farenhite
    $(".tempF").text("Current Temperature (F): " + tempF.toFixed(1));
    //var to store conversion from kelvin to celsius 
    var tempC = (response.main.temp - 273.15);
    $(".tempC").text("Current Temperature (C): " + tempC.toFixed(1));
    $(".date").text("Date: " + day)

})
// One call API needed for extra information such as UV index and 5 day forcast 
var queryURLTwo = 'https://api.openweathermap.org/data/2.5/onecall?lat=40.76&lon=-111.89&appid=dc726fd3d02ce0beabb35f8feeef04c7'

$.ajax({
    url: queryURLTwo,
    method: 'GET'
}).then(function (response) {
    console.log(response) 
    //this is for the UV index on the current day 
    $(".UVIndex").text("UV Index: " + response.current.uvi.toFixed(1));
    //var to hold the response for main weather, ex "clouds" "rain" "snow"  ect. for the current day 
    var weatherMain0 = response.current.weather[0].main;
    // if statements to change the weater icon to match the response of main weather ex "clouds" "rain" "snow"  ect. for the current day 
    if (weatherMain0 === "Clear") {
        $(".iconCurrent").attr("src", "assets/sun-128.png")
     }
     else if(weatherMain0 === "Drizzle","Clouds") {
        $(".iconCurrent").attr("src", "assets/cloudy-128.png")
    }
     else if(weatherMain0 === "Rain") {
        $(".iconCurrent").attr("src", "assets/rain-cloud-128.png")
    } 
     else if(weatherMain0 === "Snow") {
        $(".iconCurrent").attr("src", "assets/snow-128.png")
    } 
     else if(weatherMain0 === "Thunderstorm") {
        $(".iconCurrent").attr("src", "assets/flash-cloud-128.png")
    } 
    else {
        $(".iconCurrent").attr("src", "assets/rainbow-128.png")
    }
   
//------------------------------------------------------------------------------------------
// 1/5 forcast 
// var unixDtResponse = (response.daily[0].dt)  date response in unix time 
$(".date1").text(day)
var tempF1 = (response.daily[0].temp.day- 273.15) * 1.80 + 32;
$(".tempF1").text("Temperature (F): " + tempF1.toFixed(1));
var tempC1 = (response.daily[0].temp.day- 273.15);
$(".tempC1").text("Temperature (C): " + tempC1.toFixed(1));
var windMPH1 = (response.daily[0].wind_speed * 2.237)
$(".wind1").text("Wind Speed: " + windMPH1.toFixed(1) + " Mph");
$(".humidity1").text("Humidity: " + response.daily[0].humidity + "%");
$(".UVIndex1").text("UV Index: " + response.daily[0].uvi.toFixed(1))

var weatherMain1 = response.daily[0].weather[0].main;
// if statements to change the weater icon to match the response of main weather ex "clouds" "rain" "snow"  ect. for the current day 
if (weatherMain1 === "Clear") {
    $(".icon1").attr("src", "assets/sun-128.png")
 }
 else if(weatherMain1 === "Drizzle","Clouds") {
    $(".icon1").attr("src", "assets/cloudy-128.png")
}
 else if(weatherMain1 === "Rain") {
    $(".icon1").attr("src", "assets/rain-cloud-128.png")
} 
 else if(weatherMain1 === "Snow") {
    $(".icon1").attr("src", "assets/snow-128.png")
} 
 else if(weatherMain1 === "Thunderstorm") {
    $(".icon1").attr("src", "assets/flash-cloud-128.png")
} 

//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------
// 2/5 forcast 
var tempF2 = (response.daily[1].temp.day- 273.15) * 1.80 + 32;
$(".tempF2").text("Temperature (F): " + tempF2.toFixed(1));
var tempC2 = (response.daily[1].temp.day- 273.15);
$(".tempC2").text("Temperature (C): " + tempC2.toFixed(1));
var windMPH1 = (response.daily[1].wind_speed * 2.237)
$(".wind2").text("Wind Speed: " + windMPH1.toFixed(1) + " Mph");
$(".humidity2").text("Humidity: " + response.daily[1].humidity + "%");
$(".UVIndex2").text("UV Index: " + response.daily[1].uvi.toFixed(1))

var weatherMain2 = response.daily[1].weather[0].main;
// if statements to change the weater icon to match the response of main weather ex "clouds" "rain" "snow"  ect. for the current day 
if (weatherMain2 === "Clear") {
    $(".icon2").attr("src", "assets/sun-128.png")
 }
 else if(weatherMain2 ===  "Clouds") {
    $(".icon2").attr("src", "assets/cloudy-128.png")
}
 else if(weatherMain2 === "Rain") {
    $(".icon2").attr("src", "assets/rain-cloud-128.png")
} 
 else if(weatherMain2 === "Snow") {
    $(".icon2").attr("src", "assets/snow-128.png")
} 
 else if(weatherMain2 === "Thunderstorm") {
    $(".icon2").attr("src", "assets/flash-cloud-128.png")
} 

//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------
// 3/5 forcast 
var tempF3 = (response.daily[2].temp.day- 273.15) * 1.80 + 32;
$(".tempF3").text("Temperature (F): " + tempF3.toFixed(1));
var tempC3 = (response.daily[2].temp.day- 273.15);
$(".tempC3").text("Temperature (C): " + tempC3.toFixed(1));
var windMPH3 = (response.daily[2].wind_speed * 2.237)
$(".wind3").text("Wind Speed: " + windMPH3.toFixed(1) + " Mph");
$(".humidity3").text("Humidity: " + response.daily[2].humidity + "%");
$(".UVIndex3").text("UV Index: " + response.daily[2].uvi.toFixed(1))

var weatherMain3 = response.daily[2].weather[0].main;
// if statements to change the weater icon to match the response of main weather ex "clouds" "rain" "snow"  ect. for the current day 
if (weatherMain3 === "Clear") {
    $(".icon3").attr("src", "assets/sun-128.png")
 }
 else if(weatherMain3 === "Clouds") {
    $(".icon3").attr("src", "assets/cloudy-128.png")
}
 else if(weatherMain3 === "Rain") {
    $(".icon3").attr("src", "assets/rain-cloud-128.png")
} 
 else if(weatherMain3 === "Snow") {
    $(".icon3").attr("src", "assets/snow-128.png")
} 
 else if(weatherMain3 === "Thunderstorm") {
    $(".icon3").attr("src", "assets/flash-cloud-128.png")
} 

//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------
// 4/5 forcast 
var tempF4 = (response.daily[3].temp.day- 273.15) * 1.80 + 32;
$(".tempF4").text("Temperature (F): " + tempF4.toFixed(1));
var tempC4 = (response.daily[3].temp.day- 273.15);
$(".tempC4").text("Temperature (C): " + tempC4.toFixed(1));
var windMPH4 = (response.daily[3].wind_speed * 2.237)
$(".wind4").text("Wind Speed: " + windMPH4.toFixed(1) + " Mph");
$(".humidity4").text("Humidity: " + response.daily[3].humidity + "%");
$(".UVIndex4").text("UV Index: " + response.daily[3].uvi.toFixed(1))

var weatherMain4 = response.daily[3].weather[0].main;
// if statements to change the weater icon to match the response of main weather ex "clouds" "rain" "snow"  ect. for the current day 
if (weatherMain4 === "Clear") {
    $(".icon4").attr("src", "assets/sun-128.png")
 }
 else if(weatherMain4 === "Clouds") {
    $(".icon4").attr("src", "assets/cloudy-128.png")
}
 else if(weatherMain4 === "Rain") {
    $(".icon4").attr("src", "assets/rain-cloud-128.png")
} 
 else if(weatherMain4 === "Snow") {
    $(".icon4").attr("src", "assets/snow-128.png")
} 
 else if(weatherMain4 === "Thunderstorm") {
    $(".icon4").attr("src", "assets/flash-cloud-128.png")
} 

//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------
// 5/5 forcast 
var tempF5 = (response.daily[4].temp.day- 273.15) * 1.80 + 32;
$(".tempF5").text("Temperature (F): " + tempF5.toFixed(1));
var tempC5 = (response.daily[4].temp.day- 273.15);
$(".tempC5").text("Temperature (C): " + tempC5.toFixed(1));
var windMPH5 = (response.daily[4].wind_speed * 2.237)
$(".wind5").text("Wind Speed: " + windMPH5.toFixed(1) + " Mph");
$(".humidity5").text("Humidity: " + response.daily[4].humidity + "%");
$(".UVIndex5").text("UV Index: " + response.daily[4].uvi.toFixed(1))

var weatherMain5 = response.daily[4].weather[0].main;
// if statements to change the weater icon to match the response of main weather ex "clouds" "rain" "snow"  ect. for the current day 
if (weatherMain5 === "Clear") {
    $(".icon5").attr("src", "assets/sun-128.png")
 }
 else if(weatherMain5 === "Clouds") {
    $(".icon5").attr("src", "assets/cloudy-128.png")
}
 else if(weatherMain5 === "Rain") {
    $(".icon5").attr("src", "assets/rain-cloud-128.png")
} 
 else if(weatherMain5 === "Snow") {
    $(".icon5").attr("src", "assets/snow-128.png")
} 
 else if(weatherMain5 === "Thunderstorm") {
    $(".icon5").attr("src", "assets/flash-cloud-128.png")
} 

//------------------------------------------------------------------------------------------


})



    //adds a button to the recently searched aside 
    function recentlySearched() {
        $("#buttons-view").empty();

        for (var i = 0; i < cities.length; i++) {
            var button = $('<button>');
            //adds the bootstrap class being used for the buttons 
            button.addClass("btn btn-outline-info my-2 my-lg-0");
            button.attr("data-name", cities[i]);
            button.text(cities[i])
            $('#buttons-view').append(button)
        }
    }
    $('#searchCity').on('click', function (event) {
        event.preventDefault();
        //grabs the city from the input 
        var city = $('#city-input').val().trim();
        //adds the searched city to the empty arry of cities 
        cities.push(city);
        //calling the recentlySearched function 
        recentlySearched();
    });



    // images free from https://www.iconfinder.com/iconsets/tiny-weather-1 

