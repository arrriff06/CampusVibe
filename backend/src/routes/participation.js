const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

const {
  createParticipation,
  listParticipationForEvent
} = require('../controllers/participationController');

// PROTECT participation submission
router.post('/', authMiddleware, createParticipation);

// Listing can stay public OR protect it if needed
router.get('/event/:eventId', listParticipationForEvent);

module.exports = router;
