const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var dishSchema = new Schema({
    name: String,
    price: { type: Schema.Types.Mixed, required: true },
    displayImage: String,
    desc: String,
    stall: { type: Schema.Types.ObjectId, ref: 'Stall', required: true },

    rateCount: { type: Number, default: 0 },
    rateValue: { type: Number, default: 0 },

})

dishSchema
    .virtual('rating')
    .get(() => {
        return this.rateCount == 0 ? 0 : this.rateValue/this.rateCount;
    });

module.exports = mongoose.model('Dish', dishSchema);