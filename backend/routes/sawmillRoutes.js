const express = require('express');
const router = express.Router();
const sawmillController = require('../controllers/sawmillController');

router.post('/', sawmillController.createSawmill);
router.get('/', sawmillController.getSawmills);
router.get('/:id', sawmillController.getSawmillById);
router.put('/:id', sawmillController.updateSawmill);
router.delete('/:id', sawmillController.deleteSawmill);

module.exports = router;
