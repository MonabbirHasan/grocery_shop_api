const express = require('express')
const router = express.Router()
const multer=require("multer")
const {
  AllProduct,
  SingleProduct,
  DeleteProduct,
  UpdateProduct,
  CreateProduct,
} = require('../controller/product.controller')

router.get('/', AllProduct)
router.get('/:id', SingleProduct)
router.delete('/:id', DeleteProduct)
router.patch('/:id', UpdateProduct)
router.post('/', CreateProduct)

module.exports = router
