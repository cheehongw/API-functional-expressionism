const Stall = require('../db/stallModel');

const getStallXS = async (req, res, next) => {

    const targetLocation = req.params.locationID;
    const verbose = req.query.verbose === 'false' ? false : true;

    //-----------------HTTP layer ends ----------------//

    const fieldsToKeep = verbose 
        ? '_id stallName stallImage menuImage isHalal rating location'
        : '_id';

    Stall.find({location: targetLocation}, fieldsToKeep)
        .exec((err, stallXS) => {
            if (err) {
                //pass err onto middleware 
                //probably express logger
                return next(err); 
            }

            res.json(stallXS);
        });
};

module.exports = getStallXS;