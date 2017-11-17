const express = require('express');
const router = express.Router();
const config = require('../config/database');

const Resume = require('../models/resume.schema');

router.get('/resumeContact', (req, res, next) => {
    Resume.getContactData((err, resume) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to get resume' });
        } else {
            console.log(resume);
            res.json({ resume: resume });
        }
    });
});

module.exports = router;