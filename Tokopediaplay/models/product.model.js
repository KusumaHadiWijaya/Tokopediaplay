const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  videoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Video', required: true },
  name: { type: String, required: true },
  // other product fields...
});

module.exports = mongoose.model('Product', productSchema);