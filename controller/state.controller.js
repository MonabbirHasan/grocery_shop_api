const { v4: uuidv4 } = require('uuid')
const States = require('../model/state.model')

const GetAll = async (req, res) => {
  try {
    const GetAll = await States.find()
    res.status(200).send({ GetAll })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const GetSingle = async (req, res) => {
  try {
    const GetSingle = await States.findOne({ id: req.params.id })
    res.status(200).send({ GetSingle })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const CreateState = async (req, res) => {
  try {
    const NewState = new States({
      id: uuidv4(),
      Name: req.body.name,
      Image: req.body.image,
      Is_city: req.body.is_city,
      Status: req.body.status,
    })
    await NewState.save()
    res.status(200).send({ NewState })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const UpdateState = async (req, res) => {
  try {
    const Update = await States.findOne({ id: req.params.id })
    Update.id = uuidv4()
    Update.Name = req.body.name
    Update.Image = req.body.image
    Update.Is_city = req.body.is_city
    Update.Status = req.body.status
    Update.save()
    res.status(200).send({ Update })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const DeleteState = async (req, res) => {
  try {
    await States.deleteOne({ id: req.params.id })
    res.status(200).send({ message: 'STATE DELETED SUCCESSFULLY' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
module.exports = { GetAll, GetSingle, CreateState, UpdateState, DeleteState }
