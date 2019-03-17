'use strict';

const express = require('express');

const app = express();

app.get ('', (req, res) => {
    res.send('Hello express!')
});

app.get ('/help', (req, res) => {
    res.send('Help express!')
});

app.get ('/about', (req, res) => {
    res.send('About page!')
});

app.get ('/weather', (req, res) => {
    res.send('View Weather!')
});

// app.com
// app.com/help
// app.com/about

app.listen(3000, ()=>{
    console.log('server is up on port 3000');
});
