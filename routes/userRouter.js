var express = require('express');
var validateToken = require('../controllers/validateToken');
var getUserLikes = require('../controllers/getUserLikes');

var userRouter = express.Router();

userRouter.get('/likes', validateToken, getUserLikes);

module.exports = userRouter;