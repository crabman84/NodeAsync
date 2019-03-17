//Imports
const  request = require('request');

const geocode = (address, callback) =>{

    const url= `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiY3JhYm1hbjg0IiwiYSI6ImNqdGJzZm1qbzBvem0zeW85enk5YjMyZXgifQ.laATi1HZxmHd0XqV2nGQ1A&limit=1`;

    request({url, json: true}, (error, {body:bodyGeo}) =>{
        if(error){
            callback(error, 'Unable to connect to location services')
        }
        else if (bodyGeo.features == null|| !bodyGeo.features || !bodyGeo.features[0].center[0] ) {
            callback('Unable to find location try another search', undefined);
        }
        else{
            var {features} = bodyGeo;
            var {center:longLat, place_name='Aachen'} = features[0];

            // var {center[0]: long, center[1]: lat, place='Boston'} = features[0];

            address ={

                long : longLat[1],
                lat : longLat[0],
                place : place_name
            }

            //
            // var locationText = `We are in ${place_name}. The longitude is ${longLat[0]} and the latitude is ${longLat[1]}`;
            // console.log(locationText);
            callback(undefined, address)

        }
    })
};


module.exports = geocode;
