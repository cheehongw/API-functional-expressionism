const Location = require('../db/locationModel');
const Stall = require('../db/stallModel');

const getLocationDetails = (req, res, next) => {
    
    const target = req.params.locationName.replace(/_/g,' ');

    console.log(target);

    Location.find({locationName: target})
        .populate({path: 'stallList', model: Stall} )
        .exec((err, loc) => {
            if (err) {
                return next(err);
            }; 

            return res.json(loc);
        })
}

module.exports = getLocationDetails;