const Requirement = require('../models/Requirement');
const { ApiResponse } = require('../utils/ApiResponse');

const createRequirement = async (req, res, next) => {
    try {
        const {
            eventName, eventType, startDate, endDate, location, venue,
            hireType, plannerDetails, performerDetails, crewDetails
        } = req.body;

        // Basic Validation
        if (!eventName || !hireType) {
            throw new Error("Missing required fields");
        }

        // Construct the data object, setting unused details to null
        const requirementData = {
            eventName,
            eventType,
            startDate,
            endDate,
            location,
            venue,
            hireType,
            plannerDetails: hireType === 'planner' ? plannerDetails : null,
            performerDetails: hireType === 'performer' ? performerDetails : null,
            crewDetails: hireType === 'crew' ? crewDetails : null,
        };

        const requirement = await Requirement.create(requirementData);

        res.status(201).json(new ApiResponse(201, requirement, "Requirement posted successfully"));
    } catch (error) {
        next(error);
    }
};

module.exports = { createRequirement };
