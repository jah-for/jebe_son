const mongoose = require('mongoose');

const TreeSchema = new mongoose.Schema({
  species: String,
  location: {
    lat: Number,
    lng: Number,
  },
  age: Number,
});

module.exports = mongoose.model('Tree', TreeSchema);
