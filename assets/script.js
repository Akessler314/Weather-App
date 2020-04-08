var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=Ogden&appid=dc726fd3d02ce0beabb35f8feeef04c7'


$.ajax({
url: queryURL,
method: 'GET'
}).then(function(response){
console.log(response)
})