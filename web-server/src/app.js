'use strict';

const path = require('path');

const express = require('express');

const publicDir = path.join(__dirname, '../public')

console.log(__dirname);
console.log(publicDir);

const app = express();
// const htmlHelp = path.join(__dirname, '../public/help.html')


//customize the server
//treat this like a black box for now
app.use(express.static(publicDir))

// app.get ('', (req, res) => {
//     res.send()
// });


// app.use(express.static(publicDir));


// app.get ('/help', (req, res) => {
//     res.send(
//         {
//             name: 'crabMan',
//             age: 2
//         })
// });

// app.get ('/about', (req, res) => {
//     res.send('<h1>About Page</h1>')
// });

app.get ('/weather', (req, res) => {
    res.send({
        forecast: 'Flurry in the evening',
        location: 'Boston'
    })
});

// app.com
// app.com/help
// app.com/about

app.listen(3000, ()=>{
    console.log('server is up on port 3000');
});
