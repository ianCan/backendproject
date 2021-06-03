const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
    readyToEat: Boolean
});

//the line that creates the collection in mongo
const Movie = mongoose.model('Movies', movieSchema);

module.exports = Movie;