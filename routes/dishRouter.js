var express = require('express');
var dishRouter = express.Router();
var getRandomDishes = require('../controllers/getRandomDishes');
var getDishDetails = require('../controllers/getDishDetails');
var tempRedirect = require('../controllers/tempRedirect');

/* query dishes */
dishRouter.get('/', tempRedirect);

/* return a list of dishes, options: verbose, number */
dishRouter.get('/random', getRandomDishes);

/* return the stallDetails */
dishRouter.get('/:dishID', getDishDetails);

module.exports = dishRouter;