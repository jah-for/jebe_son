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
