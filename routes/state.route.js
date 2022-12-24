const express = require('express')
const router = express.Router()
const {
  GetAll,
  GetSingle,
  DeleteState,
  UpdateState,
  CreateState,
} = require('../controller/state.controller')

router.get('/', GetAll)
router.get('/:id', GetSingle)
router.delete('/:id', DeleteState)
router.patch('/:id', UpdateState)
router.post('/', CreateState)

module.exports = router
