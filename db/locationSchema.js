const mongoose = require('mongoose');
const stallSchema = require('./stallSchema');

var CoordsSchema = new mongoose.Schema({
    lat: {type: Number, required: true},
    lon: {type: Number, required: true},
})

var locationSchema = new mongoose.Schema({
    locationName: {type: String, required: true},
    locationDesc: String,
    locationURL: {type: String, required: true},
    locationImage: {type: String, required: true},
    locationCoords: {
        type: CoordsSchema,
        required: true
    },
    rating: {type: Number, default: null},
    stallList: [stallSchema],

})

module.exports = locationSchema;