const express = require('express')
const cors = require('cors')
const app = express()
// all routing code here
const UserRouter = require('./routes/user.route')
const CategoryRouter = require('./routes/category.route')
const SubRouter = require('./routes/sub.route')
const CommentRouter = require('./routes/comment.route')
const rCommnetRouter = require('./routes/rcomment.route')
const CityRouter = require('./routes/city.route')
const StateRouter = require('./routes/state.route')
const ReviewRouter = require('./routes/review.route')
const BuyerRouter = require('./routes/buyer.route')
const StockRouter = require('./routes/stock.route')
const BlogRouter = require('./routes/blog.route')
const PyamentRouter = require('./routes/payment.route')
const OrderRouter = require('./routes/order.route')
const WishlistRouter = require('./routes/wishlist.route')
const CardRouter = require('./routes/card.route')
const SearchRouter = require('./routes/search.route')
const ProductRouter = require('./routes/product.route')
const BrandRouter = require('./routes/brand.route')
const OfferRouter = require('./routes/offer.route')
// all routing code here
require('./config/db')
app.use(cors())
app.use(express.urlencoded({ extended: true }))
// ALL ROUTING CODE HERE

app.use('/api/user', UserRouter)
app.use('/api/category', CategoryRouter)
app.use('/api/sub', SubRouter)
app.use('/api/comment', CommentRouter)
app.use('/api/rcomment', rCommnetRouter)
app.use('/api/city', CityRouter)
app.use('/api/state', StateRouter)
app.use('/api/review', ReviewRouter)
app.use('/api/buyer', BuyerRouter)
app.use('/api/stock', StockRouter)
app.use('/api/blog', BlogRouter)
app.use('/api/payment', PyamentRouter)
app.use('/api/order', OrderRouter)
app.use('/api/wishlist', WishlistRouter)
app.use('/api/card', CardRouter)
app.use('/api/search', SearchRouter)
app.use('/api/product', ProductRouter)
app.use('/api/brand', BrandRouter)
app.use('/api/offer', OfferRouter)

// ALL ERROR HANDELING CODE HERE
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})
app.use((req, res, next) => {
  res.status(404).json({ message: 'THIS ROUT IS NOT FOUND' })
})
app.use((err, req, res, next) => {
  res.status(500).json({ message: 'SOMETHING IS WRONG' })
})
module.exports = app