const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var CoordsSchema = Schema({
    lat: {type: Number, required: true},
    lon: {type: Number, required: true},
})

var locationSchema = Schema({
    locationName: {type: String, required: true},
    locationDesc: {type: String, default: null},
    locationImage: {type: String, required: true},
    locationCoords: {
        type: CoordsSchema,
        required: true
    },
    rating: {type: Number, default: null},
    stallList: [{type: Schema.Types.ObjectId, ref: 'Stall'}],

})

locationSchema
    .virtual('url')
    .get( () => {
        return '/catalog/location/' + this._id;
    });

module.exports = mongoose.model('Location', locationSchema);