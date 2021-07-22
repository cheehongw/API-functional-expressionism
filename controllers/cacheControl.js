/**
 * Returns a middleware function that sets a cache control header
 * @param {Number} freshness max-age value for cachecontrol
 * @returns A middleware function
 */
const cacheControl = (freshness) => {
    return (req, res, next) => {
        res.set('Cache-Control', `public, max-age=${freshness}`);
        next()
    }
}

/**
 * Middleware to remove cache control from headers
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const removeCacheControl = (req, res, next) => {
    res.removeHeader('Cache-Control')
    next()
}

module.exports = {
    cacheControl: cacheControl,
    removeCacheControl: removeCacheControl,
}