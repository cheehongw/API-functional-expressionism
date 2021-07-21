const LikedItem = require('../db/likedItemModel');

/**
 * Returns the document (potentially null) specified 
 * by the userID and item's ObjectID. 
 * 
 * @param {String} userID The userID associated with the liked item
 * @param {String} objectID The objectId of the liked Item
 * @returns {Promise<Document?>} The (potentially null) document.
 */
const getLikeStatus = async (userID, objectID) => {

    return await LikedItem.findOne({
        user_id: userID,
        item_id: objectID,
    })
    .populate('item_id').exec()
}

module.exports = getLikeStatus;