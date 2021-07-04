const Location = require('../db/locationModel');
const Stall = require('../db/stallModel');

const getLocationDetails = (req, res, next) => {
    
    const target = req.params.locationID;

    console.log(target);

    Location.find({_id: target})
        .populate({path: 'stallList', model: Stall} )
        .exec((err, loc) => {
            if (err) {
                return next(err);
            }; 

            return res.json(loc);
        })
}

module.exports = getLocationDetails;