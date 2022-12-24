const { v4: uuidv4 } = require('uuid')
const Sub = require('../model/sub.model')

const GetAll = async (req, res) => {
  try {
    const GetAll = await Sub.find()
    res.status(200).send({ GetAll })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const GetSingle = async (req, res) => {
  try {
    const GetSingle = await Sub.findOne({ id: req.params.id })
    res.status(200).send({ GetSingle })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const CreateSub = async (req, res) => {
  try {
    const NewSub = new Sub({
      id: uuidv4(),
      Name: req.body.name,
      Image: req.body.image,
      Is_sub: req.body.is_sub,
      Status: req.body.status,
    })
    await NewSub.save()
    res.status(200).send({ NewSub })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const UpdateSub = async (req, res) => {
  try {
    const Update = await Sub.findOne({ id: req.params.id })
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
const DeleteSub = async (req, res) => {
  try {
    await Sub.deleteOne({ id: req.params.id })
    res.status(200).send({ message: 'SUB CATEGORY IS DELETED SUCCESSFULLY' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
module.exports = { GetAll, GetSingle, CreateSub, UpdateSub, DeleteSub }
