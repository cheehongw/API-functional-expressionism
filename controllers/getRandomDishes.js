const Dish = require('../db/dishModel');

const getRandomDishes = (req, res, next) => {

    const {
        number = 5,
        verbose = true,
    } = req.query;

    const fieldsToInclude = verbose ? 'name price displayImage rating desc stall' : '_id'
    //restrict query size up to 30
    number = (0 < number && number <= 30) ? number : 5; 

    Dish.aggregate
        .sample(number)
        .project(
            {fieldsToInclude})
        .lookup(
            {
                "from": "stalls",
                "localField": "stall",
                "foreignField": "_id",
                "as": "stall"
            }
        )
        .then((docs) => {
            res.json(docs)
        })
        .catch(err => next(err));

}

module.exports = getRandomDishes;