const mongoose = require('mongoose')
const BrandSchema = mongoose.Schema({
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
  Buyer: {
    type: String,
    require: true,
  },
  Desc: {
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
module.exports = mongoose.model('brand', BrandSchema)
