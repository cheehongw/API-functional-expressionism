const LikedItem = require('../db/likedItemModel');

/**
 * Returns and groups a user's liked items based on the type 
 * of items liked.
 * 
 * @param {*} uid The user's uid
 * @returns
 */
async function groupUserLikes(uid) {

    console.log(uid)

    const result = await LikedItem.aggregate()
        .match({ user_id: { $in: [uid] } })
        .group({
            _id: "$onModel",
            data: {$push: '$$ROOT'}
        })
        .project({
            groupBy: "$_id",
            _id: 0,
            data: 1
        })
        
    return result
}

module.exports = groupUserLikes;