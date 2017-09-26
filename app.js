var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require("config");
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;


mongoose.connect(config.mongodb,{useMongoClient: true})
    .then(() => {
        console.log("Database Connected "+config.mongodb);
    })
    .catch((error) => {
        console.log(error);
    })

var cars = require('./routes/cars');
var users = require('./routes/users');
var comments = require('./routes/comments');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());


app.use('/cars', cars);
app.use('/users', users);
app.use('/comments', comments);


// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        
        res.status(500).send({"message":"Oops Wrong place to be (Give correct Api Path ) or might be some Internal Server Issue"});
        console.log({ "error-status": err.status , "message" : err.message, "error" : err  });
        
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    
    res.status(500).send({"message":"Oops Wrong place to be (Give correct Api Path ) or might be some Internal Server Issue"});
    console.log({ "error-status": err.status ,"message" : err.message, "error" : err  });
    
});


module.exports = app;
