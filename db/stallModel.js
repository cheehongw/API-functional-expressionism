const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var stallSchema = new Schema({
    stallName: {type: String, required: true},
    stallImage: [String],
    menuImage: [String],
    isHalal: {type: Boolean, default: false},
    rating: {type: Number, default: null},
    location: {type: Schema.Types.ObjectId, ref: 'Location', required: true}

});

stallSchema
    .virtual('url')
    .get( () => {
        return '/catalog/stall/' + this._id;
    });

module.exports = mongoose.model('Stall', stallSchema);