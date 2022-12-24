const { v4: uuidv4 } = require('uuid')
const Orders = require('../model/order.model')

const AllOrder = async (req, res) => {
  try {
    const GetAll = await Orders.find()
    res.status(200).send({ GetAll })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const SingleOrder = async (req, res) => {
  try {
    const GetAll = await Orders.findOne({ id: req.params.id })
    res.status(200).send({ GetAll })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const CreateOrder = async (req, res) => {
  try {
    const CreateNew = new Orders({
      id: uuidv4(),
      Name: req.body.name,
      Email: req.body.email,
      Phone: req.body.phone,
      Address: req.body.address,
      Category: req.body.category,
      Product: req.body.product,
      Location: req.body.location,
      Price: req.body.price,
      Quentity: req.body.quentity,
      Weight: req.body.weight,
      Color: req.body.color,
      Delivery: req.body.delivery,
      Last_Delivery: req.body.last_delivery,
      Is_Shipped: req.body.is_shipped,
      Is_Valid: req.body.is_valid,
      Is_Paid: req.body.is_paid,
      Order_Date: req.body.order_date,
      Image: req.body.image,
      Buyer: req.body.buyer,
      user_type: req.body.user_type,
      Status: req.body.status,
    })
    await CreateNew.save()
    res.status(200).send({ CreateNew })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const UpdateOrder = async (req, res) => {
  try {
    const Update=await Orders.findOne({id:req.params.id})
    Update.id = uuidv4()
    Update.Name = req.body.name
    Update.Email = req.body.email
    Update.Phone = req.body.phone
    Update.Address = req.body.address
    Update.Category = req.body.category
    Update.Product = req.body.product
    Update.Location = req.body.location
    Update.Price = req.body.price
    Update.Quentity = req.body.quentity
    Update.Weight = req.body.weight
    Update.Color = req.body.color
    Update.Delivery = req.body.delivery
    Update.Last_Delivery = req.body.last_delivery
    Update.Is_Shipped = req.body.is_shipped
    Update.Is_Valid = req.body.is_valid
    Update.Is_Paid = req.body.is_paid
    Update.Order_Date = req.body.order_date
    Update.Image = req.body.image
    Update.Buyer = req.body.buyer
    Update.user_type = req.body.user_type
    Update.Status = req.body.status
    Update.save()
    res.status(200).send({ Update })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const DeleteOrder = async (req, res) => {
  try {
    await Orders.deleteOne({ id: req.params.id })
    res.status(200).send({ message: 'ORDER RECORD DELETED SUCCESSFULLY' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
module.exports = {
  AllOrder,
  SingleOrder,
  CreateOrder,
  UpdateOrder,
  DeleteOrder,
}
