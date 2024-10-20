// routes/votingRoutes.js
const express = require('express');
const { vote, getResults } = require('../controllers/votingController');

const router = express.Router();

router.post('/vote', vote);             // Vote endpoint
router.get('/results', getResults);      // Results endpoint

module.exports = router;
