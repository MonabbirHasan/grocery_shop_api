const express = require('express')
const {
  GetAll,
  GetSingle,
  DeleteCategory,
  UpdateCategory,
  CreateCategory,
} = require('../controller/category.controller')
const router = express.Router()

router.get('/', GetAll)
router.get('/:id', GetSingle)
router.delete('/:id', DeleteCategory)
router.patch('/:id', UpdateCategory)
router.post('/', CreateCategory)

module.exports = router
