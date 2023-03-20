var baseURL = 'https://api.openweathermap.org/data/2.5';
var apiKey = '55c390308c1632892b0e2d6d9e50f29d';
// var lat = '40.2115109';
// var lon = '-74.67966509999997';
var url = baseURL + '/weather?appid=' + apiKey;


function getLocation() {
    navigator.geolocation.getCurrentPosition(function (locationData) {
        console.log(locationData);
        // Make a request to the Open Weather Map API for the current local weather
        $.get(url + '&lat=' + locationData.coords.latitude + '&lon=' + locationData.coords.longitude).then(function (data) {
            console.log(data);
        });
    })
}

getLocation();



function getWeatherByCity () {
    $.get(url + '&q=marietta').then(function (data) {
        console.log(data);
    });
}

getWeatherByCity();
// Show the data on the page
