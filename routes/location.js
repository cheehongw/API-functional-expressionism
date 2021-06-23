var express = require('express');
var locationRouter = express.Router();
var getLocationXS = require('../controllers/getLocationXS')
var getLocationDetails = require('../controllers/getLocationDetails')

/* return a list of locations */
locationRouter.get('/', getLocationXS);

/* return the information associated with the location */
locationRouter.get('/:locationName', getLocationDetails);

module.exports = locationRouter;
 