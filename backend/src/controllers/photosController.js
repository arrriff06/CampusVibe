const Photo = require('../models/Photo');
const Event = require('../models/Event');

// upload multiple images for an event (field name 'images')
exports.uploadPhotos = async (req, res) => {
  try {
    const eventId = req.body.eventId;
    const title = req.body.title || '';
    const paths = (req.files || []).map(f => `/uploads/${f.filename}`);
    // either create new Photo doc or append
    let doc = await Photo.findOne({ eventId, title });
    if (!doc) {
      doc = await Photo.create({ eventId, title, images: paths });
    } else {
      doc.images = doc.images.concat(paths);
      await doc.save();
    }
    res.json({ success: true, photoDoc: doc });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getPhotosByEvent = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const photos = await Photo.find({ eventId });
    res.json({ success: true, photos });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.listAllPhotoGroups = async (req, res) => {
  try {
    const groups = await Photo.find().populate('eventId', 'title');
    res.json({ success: true, groups });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
