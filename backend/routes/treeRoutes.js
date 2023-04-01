const express = require('express');
const router = express.Router();
const treeController = require('../controllers/treeController');

router.post('/', treeController.createTree);
router.get('/', treeController.getTrees);
router.get('/:id', treeController.getTreeById);
router.put('/:id', treeController.updateTree);
router.delete('/:id', treeController.deleteTree);

module.exports = router;
