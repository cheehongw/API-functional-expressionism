var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const locationRouter = require('./routes/locationRouter');
const stallRouter = require('./routes/stallRouter');
const dishRouter = require('./routes/dishRouter');
const userRouter = require('./routes/userRouter');
const { cacheControl } = require('./controllers/cacheControl');

//const uploadLocation = require('./seed/uploadLocation');

var app = express();

require('dotenv').config();

//Setup mongoose connection
let mongoDB = `${process.env.DB_CONNECTION}`;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//root will redirect to documentation page in the future
//app.use('/', docs.html)

app.use(cacheControl(process.env.RESPONSE_FRESHNESS));

//json responses
app.use('/locations', locationRouter);
app.use('/stalls', stallRouter);
app.use('/dishes', dishRouter);
app.use('/user', userRouter);

//uploadLocation();

module.exports = app;
