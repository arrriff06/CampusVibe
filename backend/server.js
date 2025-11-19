require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const authRoutes = require('./src/routes/auth');
const eventRoutes = require('./src/routes/events');
const photoRoutes = require('./src/routes/photos');
const participationRoutes = require('./src/routes/participation');


const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log("Incoming:", req.method, req.url, "BODY:", req.body);
  next();
});
// --- Serve frontend static files ---
app.use(express.static(path.join(__dirname, '..', 'frontend')));


// serve uploads
app.use('/uploads', express.static(path.join(__dirname, '..', 'public', 'uploads')));

// routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/photos', photoRoutes);
app.use('/api/participation', participationRoutes);

// health
app.get('/', (req, res) => res.json({ ok: true, message: 'Campus-Vibe backend running' }));

// connect db and start server
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('DB connect error', err);
    process.exit(1);
  });
