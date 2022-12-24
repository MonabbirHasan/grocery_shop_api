const { v4: uuidv4 } = require('uuid')
const Offers = require('../model/offer.model')

const AllOffer = async (req, res) => {
  try {
    const GetAll = await Offers.find()
    res.status(200).send({ GetAll })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const SingleOffer = async (req, res) => {
  try {
    const GetSingle = await Offers.findOne({ id: req.params.id })
    res.status(200).send({ GetSingle })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const CreateOffer = async (req, res) => {
  try {
    const CreateNew = new Offers({
      id: uuidv4(),
      Name: req.body.name,
      Image: req.body.image,
      Product:req.body.product,
      Status: req.body.status,
    })
    await CreateNew.save()
    res.status(200).send(CreateNew)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const UpdateOffer = async (req, res) => {
  try {
    const Update = await Offers.findOne({ id: req.params.id })
    Update.Name = req.body.name
    Update.Image = req.body.image
    Update.Product=req.body.product
    Update.Status = req.body.status
    Update.save()
    res.status(200).send({ Update })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const DeleteOffer = async (req, res) => {
  try {
    await Offers.deleteOne({ id: req.params.id })
    res.status(200).send({ message: 'OFFER IS DELETED SUCCESSFULLY' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
module.exports = {
  AllOffer,
  SingleOffer,
  CreateOffer,
  UpdateOffer,
  DeleteOffer,
}
