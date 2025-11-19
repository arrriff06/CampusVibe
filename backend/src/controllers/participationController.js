const Participation = require('../models/Participation');

exports.createParticipation = async (req, res) => {
  try {
    console.log("Participation request body:", req.body); // debug

    const { eventId, name, email, studentCode, phone, remarks } = req.body;

    if (!eventId || !name || !email || !studentCode)
      return res.status(400).json({ message: 'Missing required fields' });

    const item = await Participation.create({ eventId, name, email, studentCode, phone, remarks });
    res.json({ success: true, participation: item });

  } catch (err) {
    console.error("Participation submission error:", err); // debug
    res.status(500).json({ message: err.message });
  }
};

exports.listParticipationForEvent = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const rows = await Participation.find({ eventId }).sort({ createdAt: -1 });
    res.json({ success: true, rows });
  } catch (err) {
    console.error("List participation error:", err); // debug
    res.status(500).json({ message: err.message });
  }
};
