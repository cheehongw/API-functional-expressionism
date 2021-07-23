const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var CoordsSchema = new Schema({
    lat: { type: Number, required: true },
    lon: { type: Number, required: true },
}, { _id: false })

var locationSchema = new Schema({
    locationName: { type: String, required: true },
    locationDesc: { type: String, default: null },
    locationImage: { type: String, required: true },
    locationCoords: {
        type: CoordsSchema,
        required: true
    },

    rateCount: { type: Number, default: 0 },
    rateValue: { type: Number, default: 0 },
})

locationSchema
    .virtual('rating')
    .get(() => {
        return this.rateCount == 0 ? 0 : this.rateValue/this.rateCount;
    });

module.exports = mongoose.model('Location', locationSchema);