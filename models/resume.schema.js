const mongoose = require('mongoose');
const config = require('../config/database');

// Resume Schema
const ResumeSchema = mongoose.Schema({
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

const Resume = module.exports = mongoose.model('Resume', ResumeSchema);

module.exports.getContactData = function(callback) {
    const projection = {
        email: 1,
        phoneNumber: 1,
    }
    Resume.find({}, projection, callback);
}

module.exports.getResume = function(callback) {
    Resume.find({}, callback);
}

module.exports.createResume = function(newResume, callback) {
    console.dir("adding resume: " + newResume);
    newResume.save(callback);
}

module.exports.deleteResume = function(id, callback) {
    let query = { "_id": id }
    Resume.findByIdAndRemove(query, callback);
}