const express = require('express')
const router = express.Router()
const {
  GetAll,
  CreateBlog,
  GetSingle,
  DeleteBlog,
  UpdateBlog,
} = require('../controller/blog.controller')

router.get('/', GetAll)
router.get('/:id', GetSingle)
router.delete('/:id', DeleteBlog)
router.patch('/:id', UpdateBlog)
router.post('/', CreateBlog)

module.exports = router
