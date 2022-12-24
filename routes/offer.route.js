const express = require('express')
const router = express.Router()
const {
  AllOffer,
  SingleOffer,
  DeleteOffer,
  UpdateOffer,
  CreateOffer,
} = require('../controller/offer.controller')

router.get('/', AllOffer)
router.get('/:id', SingleOffer)
router.delete('/:id', DeleteOffer)
router.patch('/:id', UpdateOffer)
router.post('/', CreateOffer)

module.exports = router
