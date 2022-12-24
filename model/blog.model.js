const mongoose = require('mongoose')
const BlogSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  Title: {
    type: String,
    require: true,
  },
  Author: {
    type: String,
    require: true,
  },
  Thumbnail: {
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
  Comment: {
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
module.exports = mongoose.model('blog', BlogSchema)
