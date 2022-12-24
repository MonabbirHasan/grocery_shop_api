const express = require('express')
const router = express.Router()
const {
  GetAll,
  GetSingle,
  DeleteCity,
  UpdateCity,
  CreateCity,
} = require('../controller/city.controller')

router.get('/', GetAll)
router.get('/:id', GetSingle)
router.delete('/:id', DeleteCity)
router.patch('/:id', UpdateCity)
router.post('/', CreateCity)

module.exports = router
