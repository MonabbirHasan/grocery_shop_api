const { v4: uuidv4 } = require('uuid')
const City = require('../model/city.model')
const GetAll = async (req, res) => {
  try {
    const GetAll = await City.find()
    res.status(200).send({ GetAll })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const GetSingle = async (req, res) => {
  try {
    const GetSingle = await City.findOne({ id: req.params.id })
    res.status(200).send({ GetSingle })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const CreateCity = async (req, res) => {
  try {
    const NewCity = new City({
      id: uuidv4(),
      Name: req.body.name,
      Image: req.body.image,
      Status: req.body.status,
    })
    await NewCity.save()
    res.status(200).send({ NewCity })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const UpdateCity = async (req, res) => {
  try {
    const Update = await City.findOne({ id: req.params.id })
    Update.id = uuidv4()
    Update.Name = req.body.name
    Update.Image = req.body.image
    Update.Status = req.body.status
    Update.save()
    res.status(200).send({ Update })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const DeleteCity = async (req, res) => {
  try {
    await City.deleteOne({ id: req.params.id })
    res.status(200).send({ message: 'CITY IS DELETED SUCCESSFULLY' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
module.exports = { GetAll, GetSingle, CreateCity, UpdateCity, DeleteCity }
