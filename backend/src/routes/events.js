const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');
const { createEvent, listEvents, getEvent } = require('../controllers/eventsController');

router.get('/', listEvents);
router.get('/:id', getEvent);
router.post('/', auth, upload.single('banner'), createEvent); // protected: create event with banner image

module.exports = router;
