const express = require('express');
const router = express.Router();
const loggerController = require('../controllers/loggerController');

router.post('/', loggerController.createLogger);
router.get('/', loggerController.getLoggers);
router.get('/:id', loggerController.getLoggerById);
router.put('/:id', loggerController.updateLogger);
router.delete('/:id', loggerController.deleteLogger);

module.exports = router;
