const Rate = require('../db/ratesModel');
const Dish = require('../db/dishModel');
const Stall = require('../db/stallModel');
const Location = require('../db/locationModel');

const delRating = async (uid, objectId, modelType) => {

    const Model = modelType === 'Dish'
        ? Dish
        : modelType === 'Stall'
            ? Stall
            : Location;

    const deletedItem = await Rate.findOneAndDelete({
        userId: uid,
        itemId: objectId,
        onModel: modelType
    });

    if (deletdItem.deletedCount === 1) {
        const updated = await Model.updateOne({ _id: objectID }, { $inc: { 'rateCount': -1, 'rateValue': -deletedItem.value } });
        return { rating: updated.rating, isSuccessful: true };
    } else {
        const updated = await Model.findById(objectId);
        return { rating: updated.rating, isSuccessful: false };
    }
}

module.exports = delRating;