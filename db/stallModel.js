const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var stallSchema = new Schema({
    stallName: {type: String, required: true},
    stallImage: [String],
    menuImage: [String],
    rating: {type: Number, default: null},
    menu: [{type: Schema.Types.ObjectId, ref: 'Dish'}],
    location: {type: Schema.Types.ObjectId, ref: 'Location', required: true}

});

stallSchema
    .virtual('url')
    .get( () => {
        return '/catalog/stall/' + this._id;
    });

module.exports = mongoose.model('Stall', stallSchema);