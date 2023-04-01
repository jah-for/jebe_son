const Sawmill = require('../models/Sawmill');

exports.createSawmill = async (req, res) => {
  try {
    const sawmill = new Sawmill(req.body);
    await sawmill.save();
    res.status(201).json(sawmill);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getSawmills = async (req, res) => {
  try {
    const sawmills = await Sawmill.find();
    res.status(200).json(sawmills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSawmillById = async (req, res) => {
  try {
    const sawmill = await Sawmill.findById(req.params.id);
    if (!sawmill) {
      return res.status(404).json({ error: 'Sawmill not found' });
    }
    res.status(200).json(sawmill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateSawmill = async (req, res) => {
  try {
    const sawmill = await Sawmill.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!sawmill) {
      return res.status(404).json({ error: 'Sawmill not found' });
    }
    res.status(200).json(sawmill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteSawmill = async (req, res) => {
  try {
    const sawmill = await Sawmill.findByIdAndDelete(req.params.id);
    if (!sawmill) {
      return res.status(404).json({ error: 'Sawmill not found' });
    }
    res.status(200).json({ message: 'Sawmill deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
