const express = require('express');
const bodyParser = require('body-parser');

//creating express router
const home = express.Router();

//using body parser to read values of fields(such as field name) in webpages
home.use(bodyParser.json());

//Displays homepage
home.route('/')
.get((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.sendFile('/homepage/home.html', {root: loc});
})
.all((req,res,next) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end("<html><body><h1>Not Supported</h1></body></html>");
})

//Send css files
home.route('/home.css')
.get((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/css');
    res.sendFile('/homepage/home.css', {root: loc});
}).all((req,res,next) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end("<html><body><h1>Not Supported</h1></body></html>");
})
;

module.exports = home;
