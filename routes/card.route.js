const express = require('express')
const router = express.Router()
const {
  AllCard,
  SingleCard,
  DeleteCard,
  UpdateCard,
  CreateCard,
} = require('../controller/card.controller')
router.get('/', AllCard)
router.get('/:id', SingleCard)
router.delete('/:id', DeleteCard)
router.patch('/:id', UpdateCard)
router.post('/', CreateCard)

module.exports = router
