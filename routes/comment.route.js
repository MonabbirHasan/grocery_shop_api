const express = require('express')
const router = express.Router()
const {
  GetAll,
  GetSingle,
  UpdateComment,
  DeleteComment,
  CreateComment,
} = require('../controller/comment.controller')

router.get('/', GetAll)
router.get('/:id', GetSingle)
router.patch('/:id', UpdateComment)
router.delete('/:id', DeleteComment)
router.post('/', CreateComment)

module.exports = router
