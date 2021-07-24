const getLikeStatus = require('../services/likeStatus');
const addLike = require('../services/addLike');
const delLike = require('../services/delLike');

async function handleLike(req, res) {

    const method = req.method;

    const modelType = req.params.dishID ? 'Dish' : 'Stall';
    const ObjectId = req.params.dishID || req.params.stallID;
    const uid = res.locals.uid;

    switch (method) {
        case "POST":
            const result = await addLike(uid, ObjectId, modelType);
            if (result.upserted) {
                res.status(201).json(true);
            } else {
                res.status(202).json(false)
            }
            break;
        case "DELETE":
            const outcome = await delLike(uid, ObjectId, modelType);
            outcome.deletedCount === 1
                ? res.status(200).json(true)
                : res.status(202).json(false);

            break;
        default: // Returns the document (or null if it doesnt exist)
            const LikedItem = await getLikeStatus(uid, ObjectId);
            LikedItem ? res.json(true) : res.json(false);
    }
}

module.exports = handleLike;