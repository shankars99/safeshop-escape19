const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//creating a variable that later contains model
var Type;

const signup = express.Router();

signup.use(bodyParser.json());

//serving css file for the request call
signup.route('/signup.css')
.get((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/css');
    res.sendFile('/signup/signup.css', {root: loc});
}).all((req,res,next) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end("<html><body><h1>Not Supported</h1></body></html>");
});

//serve all signup/ {shop or shopkeeper or user}
signup.route('/*')
.get((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.sendFile('/signup/signup.html', {root: loc});
})
.post((req,res,next) => {

    //setting the Type variable to have the model of either User or shopkeeper or shop
    //based on the difference in the last third character
    switch(req.url[req.url.length-3]) //switch on last third character for user that will be 's'
    {
        case 's':
            Type = require('../models/User');
            break;
        case 'p':
            Type = require('../models/shopkeeper');
            break;
        case 'o':
            Type = require('../models/shop');
            break;
    }
    
    //with the model associated with the variable Type, create account
    Type.create(req.body)
    .then((Acc) => {
        console.log('Created ', Acc);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');

        console.log(req.url + " " + req.body.type);

        res.sendFile('/homepage/home.html', {root: loc});
    }, (err) => next(err))
    .catch((err) => next(err));
}).all((req,res,next) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end("<html><body><h1>Not Supported</h1></body></html>");
});


module.exports = signup;
