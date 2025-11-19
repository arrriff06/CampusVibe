const express = require('express');
const router = express.Router();
const { createParticipation, listParticipationForEvent } = require('../controllers/participationController');

router.post('/', createParticipation);
router.get('/event/:eventId', listParticipationForEvent);

module.exports = router;
