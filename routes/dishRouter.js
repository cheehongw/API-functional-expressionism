var express = require('express');
var dishRouter = express.Router();
var getRandomDishes = require('../controllers/getRandomDishes');
var getDishDetails = require('../controllers/getDishDetails');

/* query dishes */
dishRouter.get('/', (req, res, next) => {
    res.redirect(307, '/locations');
});

/* return a list of dishes, options: verbose, number */
dishRouter.get('/random', getRandomDishes);

/* return the stallDetails */
dishRouter.get('/:dishID', getDishDetails);

module.exports = dishRouter;