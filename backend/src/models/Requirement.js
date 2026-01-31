const mongoose = require('mongoose');

const requirementSchema = new mongoose.Schema({
    eventName: { type: String, required: true },
    eventType: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    location: { type: String, required: true },
    venue: { type: String },

    hireType: {
        type: String,
        enum: ["planner", "performer", "crew"],
        required: true
    },

    plannerDetails: {
        planningType: String,
        budget: Number,
        experienceLevel: String
    },

    performerDetails: {
        performerType: String,
        durationHours: Number,
        budget: Number
    },

    crewDetails: {
        crewType: String,
        numberOfPeople: Number,
        budget: Number
    },
}, { timestamps: true });

module.exports = mongoose.model('Requirement', requirementSchema);
