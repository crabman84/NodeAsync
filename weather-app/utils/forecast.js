const  request = require('request');

const geocode = require('./geocode');

// const url = 'https://api.darksky.net/forecast/a3d4cf0eef6d53207b87f52000794028/37.8267,-122.4233?lang=he';
//end of Imports and Set up
// request({url: url, json: true}, (error, response, callback) => {
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

const forecast = (longitude, latitude, callback) => {

    const url = `https://api.darksky.net/forecast/a3d4cf0eef6d53207b87f52000794028/${latitude},${longitude}?lang=he`;
    console.log(url);
    request({url: url, json: true}, (errorWeather, response) =>{

        if(errorWeather){
            callback(errorWeather, 'Cannot connect to location services')
        }
        else if(!response.body.currently || !response.body.currently.temperature || !response.body.currently.humidity){
            callback('Cannot get temperature or humidity of your location, try a different search', undefined)
        }
        else{
            var weather = {
                temperature: response.body.currently.temperature,
                humidity: response.body.currently.humidity
            };
            var timezone = response.body.timezone;
            console.log('Timezone: ', timezone);
            callback(undefined, weather);
        }
    })


}

module.exports = forecast;
