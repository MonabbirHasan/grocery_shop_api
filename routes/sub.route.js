const express = require('express')
const router = express.Router()
const {
  GetAll,
  GetSingle,
  UpdateSub,
  DeleteSub,
  CreateSub,
} = require('../controller/sub.controller')

router.get('/', GetAll)
router.get('/:id', GetSingle)
router.patch('/:id', UpdateSub)
router.delete('/:id', DeleteSub)
router.post('/', CreateSub)

module.exports = router
