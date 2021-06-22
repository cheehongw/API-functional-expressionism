const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var dishSchema = new Schema({
    name: String,
    price: { type: Number, required: true},
    displayImage: String,

    stall: {type: Schema.Types.ObjectId, ref:'Stall', required:true}

})

module.exports = mongoose.model('Dish', dishSchema);