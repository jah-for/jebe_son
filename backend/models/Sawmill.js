const mongoose = require('mongoose');

const SawmillSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  location: String,
});

module.exports = mongoose.model('Sawmill', SawmillSchema);
