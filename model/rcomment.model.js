const mongoose = require('mongoose')
const rcommentScema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  Name: {
    type: String,
    require: true,
  },
  Comment: {
    type: String,
    require: true,
  },
  rComment: {
    type: String,
    require: true,
  },
  Image: {
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
  user_type: {
    type: String,
    require: true,
  },
  Category: {
    type: String,
    require: true,
  },
  Status: {
    type: String,
    require: true,
  },
})
module.exports = mongoose.model('rcomment', rcommentScema)
