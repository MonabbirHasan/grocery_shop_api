const express = require('express')
const router = express.Router()
const {
  GetAll,
  GetSingle,
  DeleteRcomment,
  UpdateRcomment,
  CreateRcomment,
} = require('../controller/rcomment.controller')

router.get('/', GetAll)
router.get('/:id', GetSingle)
router.delete('/:id', DeleteRcomment)
router.patch('/:id', UpdateRcomment)
router.post('/', CreateRcomment)

module.exports = router
