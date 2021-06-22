const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var stallSchema = new Schema({
    stallName: String,
    stallImage: String,
    rating: {type: Number, default: null},
    menu: [{type: Schema.Types.ObjectId, ref: 'Dish'}],

});

module.exports = mongoose.model('Stall', stallSchema);