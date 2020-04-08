// standard API 
var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=salt%20lake%20city%20&appid=dc726fd3d02ce0beabb35f8feeef04c7'
// array to hold the searched cities 
var cities = []
// var to grab the date 
var day = new Date().toDateString()

$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function (response) {
    console.log(response)

    $('.city').html("<h1>" + "City: " + response.name + "</h1>")
    //converts the defult meters per seconds wind speed to mph 
    var windMPH = (response.wind.speed * 2.237)

    $(".wind").text("Wind Speed: " + windMPH.toFixed(2) + " Miles per Hour");
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
    $(".tempC").text("Temperature (C): " + tempC.toFixed(1));
    $(".date").text("Date: " + day)

})
// One call API needed for extra information such as UV index and 5 day forcast 
var queryURLTwo = 'https://api.openweathermap.org/data/2.5/onecall?lat=40.76&lon=-111.89&appid=dc726fd3d02ce0beabb35f8feeef04c7'

$.ajax({
    url: queryURLTwo,
    method: 'GET'
}).then(function (response) {
    console.log(response) 

    $(".UVIndex").text("UV Index: " + response.current.uvi.toFixed(1));



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