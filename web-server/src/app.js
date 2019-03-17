'use strict';

//Core node applications
const path = require('path');

//modules downloaded from npm
const express = require('express');

const app = express();

//express config

//define paths for express config
const publicDir = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');
// const htmlHelp = path.join(__dirname, '../public/help.html')

// create dynamic templates with handlebars template engine for views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

//customize the server
//Setup static directory to serve
app.use(express.static(publicDir));

app.get('', (req, res) => {
      res.render('index', {
          title: 'Weather App',
          name: 'CraboRoboto'
      })
})


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
    res.send({
        forecast: 'Flurry in the evening',
        location: 'Boston'
    })
});



//TODO: Upload web code to port 3000
app.listen(3000, ()=>{
    console.log('server is up on port 3000');
});
