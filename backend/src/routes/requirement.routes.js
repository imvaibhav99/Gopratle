const express = require('express');
const { createRequirement } = require('../controllers/requirement.controller');
const router = express.Router();

router.post('/', createRequirement);

module.exports = router;
