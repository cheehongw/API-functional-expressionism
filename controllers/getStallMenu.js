const Dish = require('../db/dishModel');

const getStallMenu = async (req, res, next) => {

    const targetStall = req.params.stallID;
    
    const verbose = req.query.verbose === 'false' ? false : true;

    const fieldsToKeep = verbose 
        ? '_id name price displayImage rating desc stall'
        : '_id';

    Dish.find({stall: targetStall}, fieldsToKeep)
        .exec((err, menu) => {
            if (err) {
                return next(err); 
            }

            res.json(menu);
        });
};

module.exports = getStallMenu;