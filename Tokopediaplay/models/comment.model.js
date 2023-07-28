const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  videoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Video', required: true },
  name: { type: String, required: true },
  text: { type: String, required: true },
});

module.exports = mongoose.model('Comment', commentSchema);