const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var stallSchema = new Schema({
    stallName: { type: String, required: true },
    stallImage: [String],
    menuImage: [String],
    isHalal: { type: Boolean, default: false },
    location: { type: Schema.Types.ObjectId, ref: 'Location', required: true },

    rateCount: { type: Number, default: 0 },
    rateValue: { type: Number, default: 0 },

});

stallSchema
    .virtual('rating')
    .get(() => {
        return this.rateCount == 0 ? 0 : this.rateValue/this.rateCount;
    });

module.exports = mongoose.model('Stall', stallSchema);