const express = require('express');
var router = express.Router();

const contactsController = require('../controllers/contacts');
// const Contact = require('../models/contact');

// CREATE
router.post('/', contactsController.createContact);

// READ (all)
router.get('/', contactsController.getAll);

// READ (one)
router.get('/:id', contactsController.getSingle);

// UPDATE
router.put('/:id', contactsController.updateContact);

// DELETE
router.delete('/:id', contactsController.deleteContact);


module.exports = router;