var express = require('express');
var mongoose = require('mongoose');
var config = require('./config.json');
var routes  = require("./routes.js");
var swig = require("swig");
var session = require('express-session');
var bodyParser = require('body-parser');


var mongoHost = config.db.dev.host;
mongoose.connect(mongoHost,{ useNewUrlParser: true ,useUnifiedTopology: true});

const app = express();

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/views"));
app.use(session({secret: 'hattori',name: 'diegocookie', secure: true,
    httpOnly: true,resave: true,
    saveUninitialized: true}));

routes(app);

app.listen(config.PORT, () => {
    console.log('ok serving at..  ' + config.PORT);
});
