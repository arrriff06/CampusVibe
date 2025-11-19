const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { uploadPhotos, getPhotosByEvent, listAllPhotoGroups } = require('../controllers/photosController');

router.get('/', listAllPhotoGroups);
router.get('/event/:eventId', getPhotosByEvent);
router.post('/upload', upload.array('images', 12), uploadPhotos); // field 'images' multiple files

module.exports = router;
