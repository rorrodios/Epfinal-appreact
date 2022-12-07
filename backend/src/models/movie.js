const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    year: {
        type: String,
        required: true
    },

    calificacion: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('movie', movieSchema);