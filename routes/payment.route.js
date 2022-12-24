const express = require('express')
const router = express.Router()
const {
  GetAll,
  GetSingle,
  DeletePayment,
  UpdatePayment,
  CreatePayment,
} = require('../controller/payment.controller')

router.get('/', GetAll)
router.get('/:id', GetSingle)
router.delete('/:id', DeletePayment)
router.patch('/:id', UpdatePayment)
router.post('/', CreatePayment)

module.exports = router
