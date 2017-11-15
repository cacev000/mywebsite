const express = require('express');
const router = express.Router();
const config = require('../config/database');

const Contact = require('../models/contact.schema');

router.get('/contact', (req, res, next) => {
    Contact.getContact((err, contact) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to get contact' });
        } else {
            console.log(contact);
            res.json({ contact: contact });
        }
    });
});

module.exports = router;