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
    // console.log(url);
    request({url, json:true}, (errorWeather, {body: bodyWeather}) =>{
        var {currently, timezone} = bodyWeather;
        var {temperature, humidity} = currently;

        if(errorWeather){
            callback(errorWeather, 'Cannot connect to location services')
        }
        else if(!currently || !currently.temperature || !currently.humidity){
            callback('Cannot get temperature or humidity of your location, try a different search', undefined)
        }
        else{

            // var timezone = response.body.timezone;
            console.log('Timezone: ', timezone);

            callback(undefined, {temperature, humidity});
        }
    })


}

module.exports = forecast;
