const mongoose = require('mongoose');
const config = require('../config/database');

// Resume Schema
const ResumeSchema = mongoose.Schema({
    dateOfBirth: Date,
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
        graduationDay: Date,
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
        image: String,
        briefDescription: String,
        techonology: []
    }]
});

const Resume = module.exports = mongoose.model('Resume', ResumeSchema);

module.exports.getResume = function(id, callback) {
    Resume.find({}, callback);
}

module.exports.createResume = function(newResume, callback) {
    newResume.save(callback);
}

module.exports.deleteResume = function(id, callback) {
    let query = { "_id": id }
    Resume.findByIdAndRemove(query, callback);
}