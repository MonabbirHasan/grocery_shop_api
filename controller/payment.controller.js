const { v4: uuidv4 } = require('uuid')
const Payments = require('../model/payment.model')

const GetAll = async (req, res) => {
  try {
    const GetAll = await Payments.find()
    res.status(200).send({ GetAll })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const GetSingle = async (req, res) => {
  try {
    const GetSingle = await Payments.findOne({ id: req.params.id })
    res.status(200).send({ GetSingle })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const CreatePayment = async (req, res) => {
  try {
    const CreateNew = new Payments({
      id: uuidv4(),
      Method: req.body.method,
      Image: req.body.image,
      Category: req.body.category,
      Location: req.body.location,
      Author: req.body.author,
      Product_name: req.body.product_name,
      Is_valid: req.body.is_valid,
      Is_complete: req.body.is_complete,
      Quentity: req.body.quentity,
      Status: req.body.status,
    })
    await CreateNew.save()
    res.status(200).send({ CreateNew })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const UpdatePayment = async (req, res) => {
  try {
    const Update = await Payments.findOne({ id: req.params.id })
    Update.id = uuidv4()
    Update.Method = req.body.method
    Update.Image = req.body.image
    Update.Category = req.body.category
    Update.Location = req.body.location
    Update.Author = req.body.author
    Update.Product_name = req.body.product_name
    Update.Is_valid = req.body.is_valid
    Update.Is_complete = req.body.is_complete
    Update.Quentity = req.body.quentity
    Update.Status = req.body.status
    Update.save()
    res.status(200).send({ Update })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const DeletePayment = async (req, res) => {
  try {
    await Payments.deleteOne({ id: req.params.id })
    res.status(200).send({ message: 'PAYMENT RECORD DELETED SUCCESSFULLY' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
module.exports = {
  GetAll,
  GetSingle,
  CreatePayment,
  UpdatePayment,
  DeletePayment,
}
