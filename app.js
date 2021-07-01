var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var locationRouter = require('./routes/locationRouter');
const stallRouter = require('./routes/stallRouter');
const dishRouter = require('./routes/dishRouter');

//const uploadLocation = require('./seed/uploadLocation');

var app = express();

require('dotenv').config();

//Setup mongoose connection
let mongoDB = `${process.env.DB_TEST}`;
mongoose.connect(mongoDB, { useNewUrlParser:true, useUnifiedTopology: true });
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//root will redirect to documentation page in the future
//app.use('/', docs.html)

app.use('/locations', locationRouter);
app.use('/stalls', stallRouter);
app.use('/dishes', dishRouter);

//uploadLocation();

module.exports = app;
