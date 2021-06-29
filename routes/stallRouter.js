var express = require('express');
var stallRouter = express.Router();

var tempRedirect = require('../controllers/tempRedirect');
var getStallDetails = require('../controllers/getStallDetails');
var getStallMenu = require('../controllers/getStallMenu');

stallRouter.get('/', tempRedirect);

stallRouter.get('/:stallID', getStallDetails);

/**
 * Optional query params: verbose - default: true
 */
stallRouter.get('/:stallID/menu', getStallMenu);

module.exports = stallRouter;