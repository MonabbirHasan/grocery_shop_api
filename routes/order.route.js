const express = require('express')
const router = express.Router()
const {
  AllOrder,
  SingleOrder,
  DeleteOrder,
  UpdateOrder,
  CreateOrder,
} = require('../controller/order.controller')

router.get('/', AllOrder)
router.get('/:id', SingleOrder)
router.delete('/:id', DeleteOrder)
router.patch('/:id', UpdateOrder)
router.post('/', CreateOrder)

module.exports = router
