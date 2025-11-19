const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  try {
    const { title, description, date, venue } = req.body;
    const banner = req.file ? `/uploads/${req.file.filename}` : null;
    const event = await Event.create({ title, description, date, venue, banner, createdBy: req.user ? req.user._id : null });
    res.json({ success: true, event });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.listEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.json({ success: true, events });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.json({ success: true, event });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
