const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
  embeddedUrl: { type: String, required: true },
});

module.exports = mongoose.model('Video', videoSchema);