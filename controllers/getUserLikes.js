const groupUserLikes = require('../services/groupUserLikes');

const getUserLikes = async (req, res, next) => {

    const uid = res.locals.uid;
    const verbose = req.query.verbose === 'true'; 

    const result = await groupUserLikes(uid, verbose);
    
    res.json(result);
}

module.exports = getUserLikes
