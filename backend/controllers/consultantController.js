const Consultant = require('../models/Consultant');

exports.createConsultant = async (req, res) => {
  // Your logic for creating a consultant
};

exports.getConsultants = async (req, res) => {
  // Your logic for getting all consultants
};

exports.getConsultantById = async (req, res) => {
  // Your logic for getting a consultant by ID
};

exports.updateConsultant = async (req, res) => {
  // Your logic for updating a consultant by ID
};

exports.deleteConsultant = async (req, res) => {
  try {
    const consultant = await Consultant.findByIdAndDelete(req.params.id);
    if (!consultant) {
      return res.status(404).json({ error: 'Consultant not found' });
    }
    res.status(200).json({ message: 'Consultant deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
