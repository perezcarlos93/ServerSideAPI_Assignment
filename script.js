$(document).ready(function(){
var API_Key = "bd54b8f9736f266e782c32ce446f882a"

// var city = $("#input").val().trim();
var city = "Irvine";

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=" + API_Key;
console.log(queryURL);

// AJAX Request To OpenWeather
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response)
    let tempK = response.main.temp;
    let tempF = ((tempK-273.15)*1.8)+32

    $(".currentCity").text(response.name)
    $(".currentTemp").text("Temperature: " + tempF.toFixed(1) + "F")
    $(".currentHumidity").text("Humidity: " + response.main.humidity + "%")
    $(".currentWind").text("Wind Speed: " + response.wind.speed + "mph")
    $(".currentUV").text("UV Index: " + response.wind.speed + "mph")
})


// grab in
var previousSearches = $("#previousSearches");
var inputArray = [];

$(".searchBtn").on("click", function(){
    var city = $("#input").val().trim();
    console.log(city);
    inputArray.push(city);
    console.log(inputArray);
    // localStorage.setItem('city' )
    previousSearches.append(`<br><button class="previousSearch">${city}</button>`);
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    })
})


// NO CODE PAST HERE
});