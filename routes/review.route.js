const express = require('express')
const router = express.Router()
const {
  GetAll,
  GetSingle,
  DeleteReview,
  UpdateReview,
  CreateReview,
} = require('../controller/review.controller')

router.get('/', GetAll)
router.get('/:id', GetSingle)
router.delete('/:id', DeleteReview)
router.patch('/:id', UpdateReview)
router.post('/', CreateReview)

module.exports = router
