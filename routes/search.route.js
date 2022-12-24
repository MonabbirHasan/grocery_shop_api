const express = require('express')
const router = express.Router()
const {
  AllSearch,
  SingleSearch,
  DeleteSearch,
  UpdateSearch,
  CreateSearch,
} = require('../controller/search.controller')

router.get('/', AllSearch)
router.get('/:id', SingleSearch)
router.delete('/:id', DeleteSearch)
router.patch('/:id', UpdateSearch)
router.post('/', CreateSearch)

module.exports = router
