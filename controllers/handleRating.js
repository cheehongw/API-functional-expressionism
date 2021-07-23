const addRating = require("../services/addRating");
const delRating = require('../services/delRating')


async function handleRating(req, res, next) {

    const method = req.method;
    const modelType = req.params.dishID ? 'Dish'
        : req.params.stallID ? 'Stall' : 'Location'

    const ObjectId = req.params.dishID || req.params.stallID || req.params.LocationID;
    const uid = res.locals.uid;
    const score = req.body.score;

    switch (method) {
        case "POST": {
            const result = await addRating(uid, ObjectId, modelType, score);
            res.json(result);
            break;
        }
        case "DELETE": {
            const result = await delRating(uid, ObjectId, modelType);
            res.json(result)
            break;
        }
        default:
            res.sendStatus(404);
    }
}

module.exports = handleRating;