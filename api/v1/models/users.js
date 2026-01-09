const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
  id: Number,
  userName: String,
  password: String
});

module.exports = mongoose.model('users',Schema);