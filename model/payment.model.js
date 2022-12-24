const mongoose = require('mongoose')
const PaymentSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  Method: {
    type: String,
    require: true,
  },
  Image: {
    type: String,
    require: true,
  },
  Category: {
    type: String,
    require: true,
  },
  Location: {
    type: String,
    require: true,
  },
  Author: {
    type: String,
    require: true,
  },
  Product_name: {
    type: String,
    require: true,
  },
  CreateAt: {
    type: String,
    default: new Date().getDate(),
  },
  Is_valid: {
    type: String,
    require: true,
  },
  Is_complete: {
    type: String,
    require: true,
  },
  Quentity: {
    type: String,
    require: true,
  },
  Status: {
    type: String,
    require: true,
  },
})
module.exports = mongoose.model('payment', PaymentSchema)
