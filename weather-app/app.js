'use strict'
//Imports and Set up!
// const  request = require('request');
const geocode = require('./utils/geocode');
const forecast= require('./utils/forecast');


const location = process.argv[2];

if(!location){
    console.log('please provide a location');
}else{
    geocode(location, (errorGeo, {long, lat, place}) =>{
        // console.log('ERROR: ', errorGeo);
        if(errorGeo){
            return console.log(errorGeo);
        }

        forecast(lat, long, (errorCast, {temperature, humidity}) => {
            if(errorGeo){
                return console.log(errorCast);
            }
            // console.log('Error:', errorCast)
            console.log('DataLocation:', place);
            console.log(`Data Weather: Temp - ${temperature}F Humid - ${humidity}%`);

        });
    });


}



