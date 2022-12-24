const { v4: uuidv4 } = require('uuid')
const Category = require('../model/category.model')
const GetAll = async (req, res) => {
  try {
    const GetAll = await Category.find()
    res.status(200).send({ GetAll })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const GetSingle = async (req, res) => {
  try {
    const GetSingle = await Category.findOne({ id: req.params.id })
    res.status(200).send({ GetSingle })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const CreateCategory = async (req, res) => {
  try {
    const NewCategory = new Category({
      id: uuidv4(),
      Name: req.body.name,
      Image: req.body.image,
      Is_sub: req.body.is_sub,
      Status: req.body.status,
    })
    await NewCategory.save()
    res.status(200).send({ NewCategory })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const UpdateCategory = async (req, res) => {
  try {
    const Update = await Category.findOne({ id: req.params.id })
    Update.id = uuidv4()
    Update.Name = req.body.name
    Update.Image = req.body.image
    Update.Is_sub = req.body.is_sub
    Update.Status = req.body.status
    Update.save()
    res.status(200).send({ Update })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const DeleteCategory = async (req, res) => {
  try {
    await Category.deleteOne({ id: req.params.id })
    res.status(200).send({ message: 'CATEGORY IS DELETED SUCCESSFULLY' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
module.exports = {
  GetAll,
  GetSingle,
  CreateCategory,
  UpdateCategory,
  DeleteCategory,
}
