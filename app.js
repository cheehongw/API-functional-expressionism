var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var locationRouter = require('./routes/location');

var app = express();

//Setup mongoose connection
let mongoDB = 'mongodb+srv://CheeHong-dev:ZNpXmAq8EkazyShY@tinfood-api.my9fd.mongodb.net/functional_expressionism_API?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser:true, useUnifiedTopology: true });
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/location', locationRouter);

module.exports = app;
