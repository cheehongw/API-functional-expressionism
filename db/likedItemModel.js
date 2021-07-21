/**
 * Models a document liked by a user.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likedItemSchema = new Schema({

    user_id : {type: String, required: true},
    //document's _id
    item_id: { type: mongoose.Types.ObjectId, required: true, refPath: 'onModel' },
    onModel: {
        type: String,
        required: true,
        enum: ['Stall', 'Dish']
    }
})

module.exports = mongoose.model('LikedItem', likedItemSchema);