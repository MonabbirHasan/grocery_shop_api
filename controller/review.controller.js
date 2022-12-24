const { v4: uuidv4 } = require('uuid')
const Reviews = require('../model/review.model')

const GetAll = async (req, res) => {
  try {
    const GetAll = await Reviews.find()
    res.status(200).send({ GetAll })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const GetSingle = async (req, res) => {
  try {
    const GetSingle = await Reviews.findOne({ id: req.params.id })
    res.status(200).send({ GetSingle })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const CreateReview = async (req, res) => {
  try {
    const CreateNew = new Reviews({
      id: uuidv4(),
      Author: req.body.author,
      Email: req.body.email,
      Phone: req.body.phone,
      Address: req.body.address,
      Category: req.body.category,
      Brand: req.body.brand,
      Desc: req.body.desc,
      Product: req.body.product,
      Location: req.body.location,
      Image: req.body.image,
      user_type: req.body.user_type,
      Status: req.body.status,
    })
    await CreateNew.save()
    res.status(200).send({ CreateNew })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const UpdateReview = async (req, res) => {
  try {
    const Update = await Reviews.findOne({ id: req.params.id })
    Update.id = uuidv4()
    Update.Author = req.body.author
    Update.Email = req.body.email
    Update.Phone = req.body.phone
    Update.Address = req.body.address
    Update.Category = req.body.category
    Update.Brand = req.body.brand
    Update.Desc = req.body.desc
    Update.Product = req.body.product
    Update.Location = req.body.location
    Update.Image = req.body.image
    Update.user_type = req.body.user_type
    Update.Status = req.body.status
    Update.save()
    res.status(200).send({ Update })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const DeleteReview = async (req, res) => {
  try {
    await Reviews.deleteOne({ id: req.params.id })
    res.status(200).send({ message: 'REVIEW DELETED SUCCESSFULLY' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
module.exports = { GetAll, GetSingle, CreateReview, UpdateReview, DeleteReview }
