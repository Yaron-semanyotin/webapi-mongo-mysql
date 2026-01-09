const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
  oid: Number,
  cusid: Number,
  customerName: String,
  orderDate: Date,
  shippmentDate: Date,
  paymentType: String,
  orderDetails: [{pid: Number, pricePerUnit: Number, quantity: Number}]
});

module.exports = mongoose.model('orders',Schema);