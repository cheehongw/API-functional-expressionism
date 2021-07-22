var express = require('express');
var getStallDetails = require('../controllers/getStallDetails');
var getStallMenu = require('../controllers/getStallMenu');
var validateToken = require('../controllers/validateToken');
var handleLike = require('../controllers/handleLike');
var { removeCacheControl } = require('../controllers/cacheControl')

var stallRouter = express.Router();

stallRouter.get('/', (req, res) => {
    res.redirect(307, '/locations');
});

stallRouter.get('/:stallID', getStallDetails);

stallRouter.get('/:stallID/menu', getStallMenu);

stallRouter.use(`/:stallID/like`, validateToken, removeCacheControl, handleLike);

module.exports = stallRouter;