//Imports
const  request = require('request');

const geocode = (address, callback) =>{
    const url= `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiY3JhYm1hbjg0IiwiYSI6ImNqdGJzZm1qbzBvem0zeW85enk5YjMyZXgifQ.laATi1HZxmHd0XqV2nGQ1A&limit=1`;
    request({url: url, json: true}, (error, response) =>{
        if(error){
            callback(error, 'Unable to connect to location services')
        }
        else if (response.body.features == null|| !response.body.features || !response.body.features[0].center[0] ) {
            callback('Unable to find location try another search', undefined);
        }
        else{
            address ={

                long : response.body.features[0].center[1],
                lat : response.body.features[0].center[0],
                place : response.body.features[0].place_name
            }

            callback(undefined, address)

            var locationText = `We are in ${address.place}. The longitude is ${address.long} and the latitude is ${address.lat}`;
            console.log(locationText);

        }
    })
};


module.exports = geocode;
