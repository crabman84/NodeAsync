'use strict'
//Imports and Set up!
// const  request = require('request');
const geocode = require('./utils/geocode');
const forecast= require('./utils/forecast');


const location = process.argv[2];

if(!location){
    console.log('please provide a location');
}else{
    geocode(location, (errorGeo, dataGeo) =>{
        // console.log('ERROR: ', errorGeo);
        if(errorGeo){
            return console.log(errorGeo);
        }

        forecast(dataGeo.lat, dataGeo.long, (errorCast, dataCast) => {
            if(errorGeo){
                return console.log(errorCast);
            }
            // console.log('Error:', errorCast)
            console.log('DataLocation:', dataGeo);

            console.log('Data Weather:', dataCast)
        });
    });


}



