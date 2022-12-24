const mongoose = require('mongoose')

const ReviewSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  Author: {
    type: String,
    require: true,
  },
  Email: {
    type: String,
    require: true,
  },
  Phone: {
    type: String,
    require: true,
  },
  Address: {
    type: String,
    require: true,
  },
  Category: {
    type: String,
    require: true,
  },
  Brand: {
    type: String,
    require: true,
  },
  Desc: {
    type: String,
    require: true,
  },
  Product: {
    type: String,
    require: true,
  },
  Location: {
    type: String,
    require: true,
  },
  Image: {
    type: String,
    require: true,
  },
  user_type: {
    type: String,
    require: true,
  },
  CreateAt: {
    type: String,
    default: new Date().getDate(),
  },
  Status: {
    type: String,
    require: true,
  },
})
module.exports = mongoose.model('review', ReviewSchema)
