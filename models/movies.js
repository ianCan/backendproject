const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    genre: { type: String, required: true },
    streaming: { type: String, required: true },
    hasSeen: Boolean
});

//the line that creates the collection in mongo
const Movie = mongoose.model('Movies', movieSchema);

module.exports = Movie;