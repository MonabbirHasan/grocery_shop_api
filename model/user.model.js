const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  Name: {
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
  Citye: {
    type: String,
    require: true,
  },
  State: {
    type: String,
    require: true,
  },
  Desc: {
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
  Status: {
    type: String,
    require: true,
  },
})

module.exports = mongoose.model('users', UserSchema)
