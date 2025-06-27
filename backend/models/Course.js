const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  videos: [String]
});

module.exports = mongoose.models.Course || mongoose.model('Course', courseSchema);
