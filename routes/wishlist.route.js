const express = require('express')
const router = express.Router()
const {
  AllWishlist,
  SingleWishlist,
  DeleteWishlist,
  UpdateWishlist,
  CreateWishlist,
} = require('../controller/wishlist.controller')

router.get('/', AllWishlist)
router.get('/:id', SingleWishlist)
router.delete('/:id', DeleteWishlist)
router.patch('/:id', UpdateWishlist)
router.post('/', CreateWishlist)

module.exports = router
