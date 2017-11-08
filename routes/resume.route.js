const express = require('express');
const router = express.Router();
const config = require('../config/database');

const Resume = require('../models/resume.schema');

router.delete('/deleteResume', (req, res, next) => {
    const id = req.body.id;

    console.log(id);
    Resume.deleteResume(id, (err, resume) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to delete resume' });
        } else {
            res.json({ success: true, msg: 'Resume has been deleted' });
        }
    });
});

router.get('/resume', (req, res, next) => {
    Resume.getResume(phone, date, (err, resume) => {
        console.log(resume);
        if (err) {
            res.json({ success: false, msg: 'Failed to get resume' });
        } else {
            res.json({ resume: resume });
        }
    });
});

router.post('/createResume', (req, res, next) => {
    let newResume = new Resume({});

    Resume.createResume(newResume, (err, resume) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to create resume' });
        } else {
            res.json({ success: true, msg: 'Resume created' });
        }
    });
});

module.exports = router;