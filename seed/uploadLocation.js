const Location = require('../db/locationModel');
const Stall = require('../db/stallModel');
const Dish = require('../db/dishModel');

//load data
const locationData = require('./locations.json');
const stallData = require('./stalls.json');
const dishData = require('./dishes.json');

//create locationDocs
const locationDocs = locationData.map((loc) => {
    return new Location(loc);
})

//generate stallDocs and link them to locationDocs
const stallDocs = Object.entries(stallData).map((key_value_arr) => {

    const [location, stallXs] = key_value_arr; //less elegant than how it was done in dishDocs,

    const StallDocs = stallXs.map((stall) => {
        const doc = new Stall(stall);
        doc.location = locationDocs
            .find(x => x.locationName === location)._id;
        return doc;
    }, location);

    return StallDocs;
}).flat();

//generate dishDocs and link them to stallDocs
const dishDocs = Object.keys(dishData).map((locationKey) => {
    const stallsAtLocation = dishData[locationKey];

    const dishDocsAtStall = Object.keys(stallsAtLocation).map((stallKey) => {
        const menu = stallsAtLocation[stallKey];
        const docs = menu.map((dish) => {
            const doc = new Dish(dish);

            const locationID = locationDocs.find(y => y.locationName === locationKey)._id;
            doc.stall = stallDocs.find(x => (x.stallName === stallKey
                && x.location === locationID))._id;

            return doc;
        })
        return docs;
    })
    return dishDocsAtStall.flat();
}).flat()

//mappity map

function uploadLocation() {

    Location.bulkWrite(
        locationDocs.map(locDoc => ({
            updateOne: {
                filter: { locationName: locDoc.locationName },
                update: { $set: locDoc._doc },
                upsert: true
            }
        }))
    );

    Stall.insertMany(stallDocs);

    Dish.insertMany(dishDocs);
}

module.exports = uploadLocation;