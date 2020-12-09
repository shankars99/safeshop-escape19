const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const parse = require('url-parse');
var cookieParser = require('cookie-parser');

//Inclusion of model user
const Users = require('../models/User');
const login = express.Router();

login.use(bodyParser.json());

//Sending all login.css files here, for admin/login.css, auth/login.css, and shop/login.css
login.route('*/login.css')
.get((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/css');
    res.sendFile('/login/login.css', {root: loc});
}).all((req,res,next) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end("<html><body><h1>Not Supported</h1></body></html>");
});

//Sending all login/* files here, for login/admin, login/auth, and login/shop
login.route('/*')
.get((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.sendFile('/login/login.html', {root: loc});
})
.post((req,res,next) => {
//    console.log(req.url);

    //checks if user exists
    Users.exists({ user: req.body.usr, password: req.body.pwd, type: req.body.type})
    .then((User) => {
        if(User ==  true) //login if user loging credentials are valid
        {
            console.log('Logged In ', User);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');

//          console.log(req.body);

            res.sendFile(req.body.type + '/dashboard.html', {root: loc});
        }
        else {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'text/html');
            res.end("<html><body>Login failed</body></html>");
        }
//        console.log(req.body.usr + " " + req.body.pwd + " " + req.body.type);
    }, (err) => next(err))
    .catch((err) => next(err));
}).all((req,res,next) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end("<html><body><h1>Not Supported</h1></body></html>");
});


module.exports = login;
