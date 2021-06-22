const mongoose = require('mongoose');

var stallSchema = new mongoose.Schema({
    stallName: String,
    stallImage: String,

});

module.exports = stallSchema