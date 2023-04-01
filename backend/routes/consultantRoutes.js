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
