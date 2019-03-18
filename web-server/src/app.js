'use strict';

//Core node applications
const path = require('path');

//modules downloaded from npm
const express = require('express');
const hbs = require('hbs');


const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();

//express config

//define paths for express config
const publicDir = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
// const htmlHelp = path.join(__dirname, '../public/help.html')

// create dynamic templates with handlebars template engine for views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//customize the server
//Setup static directory to serve
app.use(express.static(publicDir));

app.get('', (req, res) => {
      res.render('index', {
          title: 'Weather App',
          name: 'CraboRoboto'
      })
});




//TODO: Routing :::::::::DDDDDDD
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        name: 'CraboRoboto'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        name: 'CraboRoboto',
        msg: 'Go back to home, we are not finished here.'
    })
})

app.get ('/weather', (req, res) => {
    const  location = req.query.address;

    if(!location){
        return res.send({
            error: 'address must be provided'
        });
    }else {
        geocode(location, (errorGeo, {long, lat, place}) => {
            // console.log('ERROR: ', errorGeo);
            if (errorGeo) {
                return console.log(errorGeo);
            }

            forecast(lat, long, (errorCast, {temperature, humidity}) => {
                if (errorGeo) {
                    return console.log(errorCast);
                }


                res.send({
                    forecast: `Temp - ${temperature}F Humid - ${humidity}%`,
                    location: place,
                    address: req.query.address
                });
                // console.log('Error:', errorCast)
                // console.log('DataLocation:', place);
                // console.log(`Data Weather: Temp - ${temperature}F Humid - ${humidity}%`);

            })
        })
    }
});

app.get('/products', (req, res) =>{

    if(!req.query.search){
        return res.send({
            error: 'You must provide a search query'
        });
    }
    console.log(req.query.search)

    return res.send({
            products: []
    })
});


app.get('/**/*', (req, res) => {
    // res.send('My 404 page');
    res.render('404', {
        title: 'ERROR: 404',
        name: 'CraboRoboto',
        errorMsg: 'Article not found!'

    })
});

app.get('*', (req, res) => {
    // res.send('My 404 page');
    res.render('404', {
        title: 'ERROR: 404',
        name: 'CraboRoboto',
        errorMsg: 'Web page not found!'
    })
});




//TODO: Upload web code to port 3000
app.listen(3000, ()=>{
    console.log('server is up on port 3000');
});
