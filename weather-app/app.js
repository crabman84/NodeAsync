'use strict'
//Imports and Set up!
const  request = require('request');


// var lang =;
// var long =;
const geocodeURL= 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY3JhYm1hbjg0IiwiYSI6ImNqdGJzZm1qbzBvem0zeW85enk5YjMyZXgifQ.laATi1HZxmHd0XqV2nGQ1A&limit=1';
    const url = 'https://api.darksky.net/forecast/a3d4cf0eef6d53207b87f52000794028/37.8267,-122.4233?lang=he';
//end of Imports and Set up
// request({url: url, json: true}, (error, response) => {
//     // const data = JSON.parse(response.body);
//     if(error)
//     {
//         console.log('Unable to connect to weather service!');
//         console.log(error);
//     }
//     else if (response.body.error) {
//         console.log('Unable to find location');
//     }
//     else
//     {
//         var currentTemp = response.body.currently.temperature;
//         var currentHumidity = response.body.currently.humidity;
//         // console.log(response.body.currently);
//         console.log(response.body.daily.data[0].summary + `It is currently  ${currentTemp} degrees out. There is ${currentHumidity}% chance of rain`)
//     }
// });



request({url: geocodeURL, json: true}, (error, response) => {


    if(error){
        console.log('Cannot reach to location services');
    }
    //NOTE: If you do not give an element for an array and test if the arry doesnt exist then it will always show true as this does not include for arrays
    else if(response.body.features == null || !response.body.features || !response.body.features[0].center[0] ){
        console.log('ERROR: Cannot find location');
    }
    else{
        var long = response.body.features[0].center[1];
        var lat = response.body.features[0].center[0];
        var place = response.body.features[0].text;
        console.log(`We are in ${place}. The longitude is${long} and the latitude is ${lat}`)
    }
});
//Geocoding
//Address
