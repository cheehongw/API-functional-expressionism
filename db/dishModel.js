const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const userSchema = require('./userModel')

// const ratingSchema = new Schema({
//     userID = {type: userSchema},
//     rating = {type: Number, min:0, max: 5}

// })

var dishSchema = new Schema({
    name: String,
    price: { type: Schema.Types.Mixed, required: true },
    displayImage: String,
    rating: { type: Number, min: 0, max: 5 },
    desc: String,
    stall: { type: Schema.Types.ObjectId, ref: 'Stall', required: true },
    // userRatings: {
    //     type: [ratingSchema]

    // }
})

dishSchema
    .virtual('url')
    .get( () => {
        return '/catalog/dish/' + this._id;
    });

module.exports = mongoose.model('Dish', dishSchema);