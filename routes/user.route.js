const express = require('express')
const {
  AllUser,
  SingleUser,
  DeleteUser,
  UpdateUser,
  CreateUser,
} = require('../controller/user.controller')
const router = express.Router()
router.get('/', AllUser)
router.get('/:id', SingleUser)
router.delete('/:id', DeleteUser)
router.patch('/:id', UpdateUser)
router.post('/', CreateUser)
module.exports = router
