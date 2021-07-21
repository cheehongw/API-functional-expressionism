require('dotenv').config();
const admin = require('firebase-admin');
const serviceAccount = require(`../${process.env.GOOGLE_APPLICATION_CREDENTIALS}`);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

function validateToken(req, res, next) {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];

    admin
        .auth()
        .verifyIdToken(token)
        .then((decodedToken) => {
            const uid = decodedToken.uid;
            res.locals.uid = uid;
            next();
        })
        .catch((err) => {
            res.status(401).send(err);
        })
}

module.exports = validateToken;