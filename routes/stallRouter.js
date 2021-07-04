var express = require('express');
var stallRouter = express.Router();

var getStallDetails = require('../controllers/getStallDetails');
var getStallMenu = require('../controllers/getStallMenu');

stallRouter.get('/', (req, res) => {
    res.redirect(307, '/locations');
});

stallRouter.get('/:stallID', getStallDetails);

/**
 * return the menu of the stall
 * query params: 
 *      verbose - default true 
 *              - returns full details of the menu,
 *                else return just the objectID of the dishes
 */
stallRouter.get('/:stallID/menu', getStallMenu);

module.exports = stallRouter;