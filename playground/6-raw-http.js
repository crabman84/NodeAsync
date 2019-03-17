
'use strict'
const https= require ('https');

const url = `https://api.darksky.net/forecast/a3d4cf0eef6d53207b87f52000794028/7, 52?lang=he`;

const request = https.request(url, (response)=>{
    //we dont have access to complete response.body
    //So we must listen for each data packet we get
    let data = '';

    response.on('data',(chunk) => {
        data = data + chunk.toString();
        // console.log(chunk);

    });

    response.on('end', () =>{
        // console.log();
        const body = JSON.parse(data)
        console.log(body);
    });
});

request.on('error', (error) =>{
    console.log('an error: \n', error)
 });

request.end();
