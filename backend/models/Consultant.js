const mongoose = require('mongoose');

const ConsultantSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  expertise: String,
});

module.exports = mongoose.model('Consultant', ConsultantSchema);
