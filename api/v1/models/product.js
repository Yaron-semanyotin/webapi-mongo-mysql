const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
  pid: Number,
  price: Number,
  pName: String,
});

module.exports = mongoose.model('products',Schema);