const mongoose = require('mongoose')
const CardSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  Product: {
    type: String,
    require: true,
  },
  Image: {
    type: String,
    require: true,
  },
  Price: {
    type: String,
    require: true,
  },
  CreateAt: {
    type: String,
    default: new Date().getDate(),
  },
  Quentity: {
    type: String,
    require: true,
  },
  Category: {
    type: String,
    require: true,
  },
  Delivery_Date: {
    type: String,
    require: true,
  },
  Last_Delivery: {
    type: String,
    require: true,
  },
  Descount: {
    type: String,
    require: true,
  },
  Buyer: {
    type: String,
    require: true,
  },
  Is_Valid: {
    type: String,
    require: true,
  },
  Status: {
    type: String,
    require: true,
  },
})
module.exports = mongoose.model('card', CardSchema)
