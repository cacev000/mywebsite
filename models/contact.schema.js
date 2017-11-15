const mongoose = require('mongoose');
const config = require('../config/database');

// Contact Schema
const ContactSchema = mongoose.Schema({
    firstName: String,
    middleName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    houseNumber: String,
    studies: [{
        universityName: String,
        city: String,
        state: String,
        graduationDay: String,
        degreeType: String,
        major: String,
        minor: String
    }],
    selfDescription: String,
    currentPosition: String,
    address: String,
    state: String,
    city: String,
    country: String,
    skills: [],
    certifications: [],
    experience: [{
        work: String,
        startDate: Date,
        endDate: Date,
        isCurrentJob: Boolean,
        title: String,
        description: String,
        city: String,
        state: String,
    }],
    portfolio: [{
        website: String,
        images: [],
        briefDescription: String,
        techonology: []
    }]
});

const Contact = module.exports = mongoose.model('Contact', ContactSchema);

module.exports.getContact = function(callback) {
    Contact.find({}, callback);
}