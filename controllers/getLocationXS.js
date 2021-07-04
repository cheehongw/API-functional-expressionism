const Location = require('../db/locationModel');

const getLocationXS = async (req, res, next) => {

    const fieldsToKeep = '_id locationName locationDesc locationURL locationImage locationCoords rating';

    Location.find({}, fieldsToKeep)
        .exec((err, locationXS) => {
            if (err) {
                //pass err onto middleware 
                //probably express logger
                return next(err); 
            }

            res.json(locationXS);
        });
};

module.exports = getLocationXS;