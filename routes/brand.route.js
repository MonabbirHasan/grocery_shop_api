const express = require('express')
const router = express.Router()
const {
  AllBrand,
  SingleBrand,
  DeleteBrand,
  UpdateBrand,
  CreateBrand,
} = require('../controller/brand.controller')

router.get('/', AllBrand)
router.get('/:id', SingleBrand)
router.delete('/:id', DeleteBrand)
router.patch('/:id', UpdateBrand)
router.post('/', CreateBrand)

module.exports = router
