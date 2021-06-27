const Stall = require('../db/stallModel');
const Dish = require('../db/dishModel');

const getStallDetails = (req, res, next) => {
    
    const target = req.params.stallName.replace(/_/g,' ');

    console.log(target);

    Stall.find({stallName: target})
        .populate({path: 'menu', model: Dish} )
        .exec((err, loc) => {
            if (err) {
                return next(err);
            }; 

            return res.json(loc);
        })
}

module.exports = getStallDetails;