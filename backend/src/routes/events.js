const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const adminOnly = require('../middleware/admin');

const {
  createEvent,
  getEvents,
  deleteEvent
} = require('../controllers/eventController');

// PUBLIC – users can view events
router.get('/', getEvents);

// ADMIN ONLY – create event
router.post('/', auth, adminOnly, createEvent);

// ADMIN ONLY – delete event
router.delete('/:id', auth, adminOnly, deleteEvent);

module.exports = router;
