const mongoose = require('mongoose')
const WishlistSchema = mongoose.Schema({
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
  Category: {
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
module.exports = mongoose.model('wishlist', WishlistSchema)
