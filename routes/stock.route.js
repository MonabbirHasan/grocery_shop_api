const express = require('express')
const router = express.Router()
const {
  GetAll,
  GetSingle,
  DeleteStock,
  UpdateStock,
  CreateStock,
} = require('../controller/stock.controller')

router.get('/', GetAll)
router.get('/:id', GetSingle)
router.delete('/:id', DeleteStock)
router.patch('/:id', UpdateStock)
router.post('/', CreateStock)

module.exports = router
