const mongoose = require('mongoose');

const developerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    img: {
        type: String,
        required: true
    }, 
});

module.exports = mongoose.model('developer', developerSchema);