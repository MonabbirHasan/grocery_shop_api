const { v4: uuidv4 } = require('uuid')
const Cards = require('../model/card.model')

const AllCard = async (req, res) => {
  try {
    const GetAll = await Cards.find()
    res.status(200).send({ GetAll })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const SingleCard = async (req, res) => {
  try {
    const GetSingle = await Cards.findOne({ id: req.params.id })
    res.status(200).send({ GetSingle })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const CreateCard = async (req, res) => {
  try {
    const CreateNew = new Cards({
      id: uuidv4(),
      Product: req.body.product,
      Image: req.body.image,
      Price: req.body.price,
      Quentity: req.body.quentity,
      Category: req.body.category,
      Delivery_Date: req.body.delivery_date,
      Last_Delivery: req.body.last_delivery,
      Descount: req.body.descount,
      Buyer: req.body.buyer,
      Is_Valid: req.body.is_valid,
      Status: req.body.status,
    })
    await CreateNew.save()
    res.status(200).send({ CreateNew })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const UpdateCard = async (req, res) => {
  try {
    const Update = await Cards.findOne({ id: req.params.id })
    Update.id = uuidv4()
    Update.Product = req.body.product
    Update.Image = req.body.image
    Update.Price = req.body.price
    Update.Quentity = req.body.quentity
    Update.Category = req.body.category
    Update.Delivery_Date = req.body.delivery_date
    Update.Last_Delivery = req.body.last_delivery
    Update.Descount = req.body.descount
    Update.Buyer = req.body.buyer
    Update.Is_Valid = req.body.is_valid
    Update.Status = req.body.status
    Update.save()
    res.status(200).send({ Update })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const DeleteCard = async (req, res) => {
  try {
    await Cards.deleteOne({ id: req.params.id })
    res.status(200).send({ message: 'CARD RECORD DELETED SUCCESSFULLY' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
module.exports = { AllCard, SingleCard, CreateCard, UpdateCard, DeleteCard }
