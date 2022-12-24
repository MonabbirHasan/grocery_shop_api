const mongoose = require('mongoose')
const SubSchema = {
  id: {
    type: String,
    require: true,
  },
  Name: {
    type: String,
    require: true,
  },
  Image: {
    type: String,
    require: true,
  },
  Is_sub: {
    type: String,
    require: true,
  },
  CreateAt: {
    type: String,
    default: new Date().getUTCDate(),
  },
  Status: {
    type: String,
    require: true,
  },
}
module.exports = mongoose.model('sub', SubSchema)
