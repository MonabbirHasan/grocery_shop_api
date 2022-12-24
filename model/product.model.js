const mongoose = require('mongoose')
const ProductSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  Name: {
    type: String,
    require: true,
  },
  Weight: {
    type: String,
    require: true,
  },
  Category: {
    type: String,
    require: true,
  },
  Rating: {
    type: String,
    require: true,
  },
  Review: {
    type: String,
    require: true,
  },
  Offer: {
    type: String,
    require: true,
  },
  Image: {
    type: String,
    require: true,
  },
  CreateAt: {
    type: String,
    default: true,
  },
  Author: {
    type: String,
    require: true,
  },
  Buyer: {
    type: String,
    require: true,
  },
  Location: {
    type: String,
    require: true,
  },
  City: {
    type: String,
    require: true,
  },
  Brand: {
    type: String,
    require: true,
  },
  Delivery_Time: {
    type: String,
    require: true,
  },
  Discount: {
    type: String,
    require: true,
  },
  Import_Date: {
    type: String,
    require: true,
  },
  Is_Date_Over: {
    type: String,
    require: true,
  },
  Color: {
    type: String,
    require: true,
  },
  Image_Arr: {
    type: String,
    require: true,
  },
  Video: {
    type: String,
    require: false,
  },
  Desc: {
    type: String,
    require: true,
  },
  Is_Sold: {
    type: String,
    require: true,
  },
  Is_Valid: {
    type: String,
    require: true,
  },
  In_Stock: {
    type: String,
    require: true,
  },
  Price: {
    type: String,
    require: true,
  },
  Old_Price: {
    type: String,
    require: true,
  },
  Is_Available: {
    type: String,
    require: true,
  },
  Comment: {
    type: String,
    require: true,
  },
  Is_Pesticid: {
    type: String,
    require: true,
  },
  Status: {
    type: String,
    require: true,
  },
})
module.exports = mongoose.model('product', ProductSchema)
