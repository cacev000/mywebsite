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
    Resume.getResume((err, resume) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to get resume' });
        } else {
            console.log(resume);
            res.json({ resume: resume });
        }
    });
});

router.post('/createResume', (req, res, next) => {
    let newResume = new Resume({
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        houseNumber: req.body.houseNumber,
        studies: req.body.studies,
        selfDescription: req.body.selfDescription,
        currentPosition: req.body.currentPosition,
        address: req.body.address,
        state: req.body.state,
        city: req.body.city,
        country: req.body.country,
        skills: req.body.skills,
        certifications: req.body.certifications,
        experience: req.body.experience,
        portfolio: req.body.portfolio
    });

    Resume.createResume(newResume, (err, resume) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to create resume' });
        } else {
            res.json({ success: true, msg: 'Resume created' });
        }
    });
});

module.exports = router;