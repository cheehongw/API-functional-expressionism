const Location = require('../db/locationModel');

const getLocationDetails = (req, res, next) => {
    
    const target = req.params.locationName.replaceAll('_',' ');

    Location.find({locationName: target})
        .populate('stallList')
        .exec((err, loc) => {
            if (err) {
                return next(err);
            }; 

            return res.json(loc);
        })
}

module.exports = getLocationDetails;