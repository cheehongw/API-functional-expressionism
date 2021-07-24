const LikedItem = require('../db/likedItemModel');
const Dish = require('../db/dishModel');
const Stall = require('../db/stallModel');
const Location = require('../db/locationModel');

/**
 * Returns and groups a user's liked items based on the type 
 * of items liked.
 * 
 * @param {*} uid The user's uid
 * @returns
 */
async function groupUserLikes(uid, verbose) {

    const result = await LikedItem.aggregate()
        .match({ user_id: { $in: [uid] } })
        .group({
            _id: "$onModel",
            v: { $push: "$item_id" }
        }).project({
            k: "$_id",
            _id: 0,
            v: 1
        })

    const x = verbose
        ? await Promise.all(result.map(groups => {
            const Model = groups.k === 'Dish'
                ? Dish
                : groups.k === 'Stall'
                    ? Stall
                    : Location;

            console.log(groups.v);

            return Model.populate(groups, { path: "v" });
        }))
        : result;

    const kvarrayXS = x.map( fatObject => {
        return [fatObject["k"], fatObject["v"]]
    })

    return Object.fromEntries(kvarrayXS);
    
}

module.exports = groupUserLikes;