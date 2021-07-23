const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ratesSchema = new Schema({

    userId: { type: String, required: true },
    itemId: { type: mongoose.Types.ObjectId, required: true, refPath: 'onModel' },
    onModel: { type: String, required: true, enum: ['Location', 'Stall', 'Dish'] },
    value: { type: Number, min: 1, max: 5, required: true },
    date: {type: Date, default: Date.now}

});

module.exports = mongoose.model('Rate', ratesSchema);