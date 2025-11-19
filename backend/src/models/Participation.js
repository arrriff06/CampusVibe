const mongoose = require('mongoose');

const participationSchema = new mongoose.Schema({
  eventId: { type: String, required: true }, // <-- changed to String
  name: { type: String, required: true },
  email: { type: String, required: true },
  studentCode: { type: String, required: true },
  phone: String,
  remarks: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Participation', participationSchema);
