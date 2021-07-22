const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var CoordsSchema = new Schema({
    lat: {type: Number, required: true},
    lon: {type: Number, required: true},
},{_id : false})

var locationSchema = new Schema({
    locationName: {type: String, required: true},
    locationDesc: {type: String, default: null},
    locationImage: {type: String, required: true},
    locationCoords: {
        type: CoordsSchema,
        required: true
    },
    rating: {type: Number, default: null},

})

locationSchema
    .virtual('url')
    .get( () => {
        return '/catalog/location/' + this._id;
    });

module.exports = mongoose.model('Location', locationSchema);