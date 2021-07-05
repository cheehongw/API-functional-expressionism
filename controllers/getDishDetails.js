const Dish = require('../db/dishModel');
const Stall = require('../db/stallModel');

const getDishDetails = (req, res, next) => {
    
    const target = req.params.dishID;

    Dish.find({_id: target})
        .populate({path: 'stall', model: Stall} )
        .exec((err, loc) => {
            if (err) {
                return next(err);
            }; 

            return res.json(loc);
        })
}

module.exports = getDishDetails;