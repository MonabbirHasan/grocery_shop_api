const mongoose = require('mongoose')
const BuyerSchema = mongoose.Schema({
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
  Image: {
    type: String,
    require: true,
  },
  Total_product: {
    type: String,
    require: true,
  },
  Brand: {
    type: String,
    require: true,
  },
  Category: {
    type: String,
    require: true,
  },
  City: {
    type: String,
    require: true,
  },
  State: {
    type: String,
    require: true,
  },
  Location: {
    type: String,
    require: true,
  },
  Product_video: {
    type: String,
    require: true,
  },
  CreateAt: {
    type: String,
    default: new Date().getDate(),
  },
  Total_earn: {
    type: String,
    require: true,
  },
  Total_user: {
    type: String,
    require: true,
  },
  Total_stock: {
    type: String,
    require: true,
  },
  Is_verified: {
    type: String,
    require: true,
  },
  Pay_Method: {
    type: String,
    require: true,
  },
  Pay_History: {
    type: String,
    require: true,
  },
  Status: {
    type: String,
    require: true,
  },
})
module.exports = mongoose.model('buyer', BuyerSchema)
