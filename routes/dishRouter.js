var express = require('express');
var dishRouter = express.Router();
var getRandomDishes = require('../controllers/getRandomDishes');
var getDishDetails = require('../controllers/getDishDetails');
var handleLike = require('../controllers/handleLike');
var validateToken = require('../controllers/validateToken');

/* query dishes */
dishRouter.get('/', (req, res, next) => {
    res.redirect(307, '/locations');
});

/* return a list of dishes, options: verbose, number */
dishRouter.get('/random', getRandomDishes);

/* return the stallDetails */
dishRouter.get('/:dishID', getDishDetails);

dishRouter.use(`/:dishID/like`, validateToken, handleLike);

module.exports = dishRouter;