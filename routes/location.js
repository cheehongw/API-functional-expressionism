var express = require('express');
var locationRouter = express.Router();
var getLocationXS = require('../controllers/getLocationXS')
var getLocationDetails = require('../controllers/getLocationDetails')
var getStallDetails = require('../controllers/getStallDetails')

/* return a list of locations */
locationRouter.get('/', getLocationXS);

/* return the information associated with the location */
locationRouter.get('/:locationName', getLocationDetails);

/* return the stallDetails */
locationRouter.get('/:locationName/:stallName', getStallDetails);

module.exports = locationRouter;
 