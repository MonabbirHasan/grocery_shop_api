const mongoose = require('mongoose')

const StockSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  Brand: {
    type: String,
    require: true,
  },
  Product_Name: {
    type: String,
    require: true,
  },
  Product_Weight: {
    type: String,
    require: true,
  },
  Product_Color: {
    type: String,
    require: true,
  },
  Image: {
    type: String,
    require: true,
  },
  Category: {
    type: String,
    require: true,
  },
  Author: {
    type: String,
    require: true,
  },
  In_Stock: {
    type: String,
    require: true,
  },
  Is_Valid: {
    type: String,
    require: true,
  },
  CreateAt: {
    type: String,
    default: new Date().getDate(),
  },
  Location: {
    type: String,
    require: true,
  },
  Import_Date: {
    type: String,
    require: true,
  },
  Expire_Date: {
    type: String,
    require: true,
  },
  Is_Sold: {
    type: String,
    require: true,
  },
  Status:{
    type:String,
    require:true
  }
})
module.exports = mongoose.model('stock', StockSchema)
