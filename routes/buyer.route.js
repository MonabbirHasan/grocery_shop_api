const express = require('express')
const router = express.Router()
const {
  GetAll,
  GetSingle,
  DeleteBuyer,
  UpdateBuyer,
  CreateBuyer,
} = require('../controller/buyer.controller')

router.get('/', GetAll)
router.get('/:id', GetSingle)
router.delete('/:id', DeleteBuyer)
router.patch('/:id', UpdateBuyer)
router.post('/', CreateBuyer)

module.exports = router
