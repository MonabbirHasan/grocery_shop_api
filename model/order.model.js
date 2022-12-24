const mongoose = require('mongoose')
const OrderSchema = mongoose.Schema({
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
  Category: {
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
  Price: {
    type: String,
    require: true,
  },
  Quentity: {
    type: String,
    require: true,
  },
  Weight: {
    type: String,
    require: true,
  },
  Color: {
    type: String,
    require: true,
  },
  Delivery: {
    type: String,
    require: true,
  },
  Last_Delivery: {
    type: String,
    require: true,
  },
  Is_Shipped: {
    type: String,
    require: true,
  },
  Is_Valid: {
    type: String,
    require: true,
  },
  Is_Paid: {
    type: String,
    require: true,
  },
  Order_Date: {
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
  user_type: {
    type: String,
    require: true,
  },
  Status: {
    type: String,
    require: true,
  },
})
module.exports = mongoose.model('order', OrderSchema)
