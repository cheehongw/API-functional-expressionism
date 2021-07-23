const Rate = require('../db/ratesModel');
const Dish = require('../db/dishModel');
const Stall = require('../db/stallModel');
const Location = require('../db/locationModel');

const addRating = async (uid, objectID, modelType, score) => {

    const Model = modelType === 'Dish'
        ? Dish
        : modelType === 'Stall'
            ? Stall
            : Location;

    const ratedBefore = await Rate.findOne({
        userId: uid,
        itemId: objectID,
        onModel: modelType
    });

    const previousScore = ratedBefore === null ? 0 : ratedBefore.value;

    const result = await Rate.updateOne({
        userId: uid,
        itemId: objectID,
        onModel: modelType,
        value: score,
        date: Date.now()
    }, {
        userId: uid,
        itemId: objectID,
        onModel: modelType,
        value: score,
        date: Date.now()
    }, { upsert: true });

    if (result.upserted) {
        const res = await Model.updateOne({ _id: objectID }, { $inc: { 'rateCount': 1, 'rateValue': score } });
        return { rating: res.rating, isInserted: true };
    } else { //not upserted but updated
        const scoreDiff = score - previousScore;
        const res = await Model.updateOne({ _id: objectID }, { $inc: { 'rateValue': scoreDiff } });
        return { rating: res.rating, isInserted: false };
    }

}

module.exports = addRating;