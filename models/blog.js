const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description : { type: String, required: true },
  rating : { type: Number, default: 5 },
  isFav: { type: Boolean, default: false },
}, { timestamps: true });


const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;