const LikedItem = require('../db/likedItemModel');

/**
 * Deletes a liked item.
 * 
 * @param {String} userID The userId of the user that liked the item.
 * @param {String} objectID The objectId of the item
 * @param {String} itemType The type of item liked
 * @returns 
 */
const delLike = async (userID, objectID, itemType) => {

    // console.log(`${userID}/${objectID}/${itemType}`);

    const res = await LikedItem.deleteOne({
        user_id: userID,
        item_id: objectID,
        onModel: itemType
    });

    return res;
}

module.exports = delLike;