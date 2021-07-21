const LikedItem = require('../db/likedItemModel');

/**
 * Adds a LikeItem to the database
 * 
 * @param {String} userID The userId of the user that liked the item.
 * @param {String} objectID The objectId of the item
 * @param {String} itemType The type of item liked
 * @returns {*} A document that contains:
 * 
 * `matchedCount` containing the number of matched documents
 * 
 * `modifiedCount` containing the number of modified documents
 * 
 * `upsertedId` containing the _id for the upserted document
 * 
 * See: https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/#returns
 */
const addLike = async (userID, objectID, itemType) => {

    const res = await LikedItem.updateOne({
        user_id: userID,
        item_id: objectID,
        onModel: itemType
    }, {
        user_id: userID,
        item_id: objectID,
        onModel: itemType
    }, { upsert: true });

    return res;
}

module.exports = addLike;