const { v4: uuidv4 } = require('uuid')
const Wishlist = require('../model/wishlist.model')
const AllWishlist = async (req, res) => {
  try {
    const GetAll = await Wishlist.find()
    res.status(200).send({ GetAll })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const SingleWishlist = async (req, res) => {
  try {
    const GetSingle = await Wishlist.findOne({ id: req.params.id })
    res.status(200).send({ GetSingle })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const CreateWishlist = async (req, res) => {
  try {
    const CreateNew = new Wishlist({
      id: uuidv4(),
      Product: req.body.product,
      Image: req.body.image,
      Price: req.body.price,
      Category: req.body.category,
      Status: req.body.status,
    })
    await CreateNew.save()
    res.status(200).send({ CreateNew })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const UpdateWishlist = async (req, res) => {
  try {
    const Update = await Wishlist.findOne({ id: req.params.id })
    Update.id = uuidv4()
    Update.Product = req.body.product
    Update.Image = req.body.image
    Update.Price = req.body.price
    Update.Category = req.body.category
    Update.Status = req.body.status
    Update.save()
    res.status(200).send({ Update })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const DeleteWishlist = async (req, res) => {
  try {
    await Wishlist.deleteOne({ id: req.params.id })
    res.status(200).send({ message: 'WISHLIST IS DELETED SUCCESSFULLY' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
module.exports = {
  AllWishlist,
  SingleWishlist,
  CreateWishlist,
  UpdateWishlist,
  DeleteWishlist,
}
