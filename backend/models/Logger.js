const mongoose = require('mongoose');

const LoggerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  location: String,
});

module.exports = mongoose.model('Logger', LoggerSchema);
