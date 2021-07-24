const groupUserLikes = require('../services/groupUserLikes');

const getUserLikes = async (req, res, next) => {

    const uid = res.locals.uid;
    const result = await groupUserLikes(uid);
    
    res.json(result);
}

module.exports = getUserLikes
