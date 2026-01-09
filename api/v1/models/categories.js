const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
  cid: Number,
  categoryName: String,
});

module.exports = mongoose.model('categories',Schema);