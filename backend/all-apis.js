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
const Logger = require('../models/Logger');

exports.createLogger = async (req, res) => {
  try {
    const logger = new Logger(req.body);
    await logger.save();
    res.status(201).json(logger);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getLoggers = async (req, res) => {
  try {
    const loggers = await Logger.find();
    res.status(200).json(loggers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLoggerById = async (req, res) => {
  try {
    const logger = await Logger.findById(req.params.id);
    if (!logger) {
      return res.status(404).json({ error: 'Logger not found' });
    }
    res.status(200).json(logger);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateLogger = async (req, res) => {
  try {
    const logger = await Logger.findById(req.params.id);
    if (!logger) {
      return res.status(404).json({ error: 'Logger not found' });
    }
    logger.set(req.body);
    await logger.save();
    res.status(200).json(logger);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteLogger = async (req, res) => {
  try {
    const logger = await Logger.findByIdAndDelete(req.params.id);
    if (!logger) {
      return res.status(404).json({ error: 'Logger not found' });
    }
    res.status(200).json({ message: 'Logger deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
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
const Tree = require('../models/Tree');

exports.createTree = async (req, res) => {
  try {
    const tree = new Tree(req.body);
    await tree.save();
    res.status(201).json(tree);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTrees = async (req, res) => {
  try {
    const trees = await Tree.find();
    res.status(200).json(trees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTreeById = async (req, res) => {
  try {
    const tree = await Tree.findById(req.params.id);
    if (!tree) {
      return res.status(404).json({ error: 'Tree not found' });
    }
    res.status(200).json(tree);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTree = async (req, res) => {
  try {
    const tree = await Tree.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!tree) {
      return res.status(404).json({ error: 'Tree not found' });
    }
    res.status(200).json(tree);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTree = async (req, res) => {
  try {
    const tree = await Tree.findByIdAndDelete(req.params.id);
    if (!tree) {
      return res.status(404).json({ error: 'Tree not found' });
    }
    res.status(200).json(tree);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const express = require('express');
const router = express.Router();
const consultantController = require('../controllers/consultantController');

// Create a new consultant
router.post('/', consultantController.createConsultant);

// Get all consultants
router.get('/', consultantController.getConsultants);

// Get a consultant by ID
router.get('/:id', consultantController.getConsultantById);

// Update a consultant by ID
router.put('/:id', consultantController.updateConsultant);

// Delete a consultant by ID
router.delete('/:id', consultantController.deleteConsultant);

module.exports = router;
const express = require('express');
const router = express.Router();
const loggerController = require('../controllers/loggerController');

router.post('/', loggerController.createLogger);
router.get('/', loggerController.getLoggers);
router.get('/:id', loggerController.getLoggerById);
router.put('/:id', loggerController.updateLogger);
router.delete('/:id', loggerController.deleteLogger);

module.exports = router;
const express = require('express');
const router = express.Router();
const sawmillController = require('../controllers/sawmillController');

router.post('/', sawmillController.createSawmill);
router.get('/', sawmillController.getSawmills);
router.get('/:id', sawmillController.getSawmillById);
router.put('/:id', sawmillController.updateSawmill);
router.delete('/:id', sawmillController.deleteSawmill);

module.exports = router;
const express = require('express');
const router = express.Router();
const treeController = require('../controllers/treeController');

router.post('/', treeController.createTree);
router.get('/', treeController.getTrees);
router.get('/:id', treeController.getTreeById);
router.put('/:id', treeController.updateTree);
router.delete('/:id', treeController.deleteTree);

module.exports = router;
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
const mongoose = require('mongoose');

const ConsultantSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  expertise: String,
});

module.exports = mongoose.model('Consultant', ConsultantSchema);
const mongoose = require('mongoose');

const LoggerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  location: String,
});

module.exports = mongoose.model('Logger', LoggerSchema);
const mongoose = require('mongoose');

const SawmillSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  location: String,
});

module.exports = mongoose.model('Sawmill', SawmillSchema);
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
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

module.exports = mongoose.model('User', UserSchema);
