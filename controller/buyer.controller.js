const { v4: uuidv4 } = require('uuid')
const Buyers = require('../model/buyer.model')

const GetAll = async (req, res) => {
  try {
    const GetAll = await Buyers.find()
    res.status(200).send({ GetAll })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const GetSingle = async (req, res) => {
  try {
    const GetSingle = await Buyers.findOne({ id: req.params.id })
    res.status(200).send({ GetSingle })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const CreateBuyer = async (req, res) => {
  try {
    const CreateNew = new Buyers({
      id: uuidv4(),
      Name: req.body.name,
      Email: req.body.email,
      Phone: req.body.phone,
      Address: req.body.address,
      Image: req.body.image,
      Total_product: req.body.total_product,
      Brand: req.body.brand,
      Category: req.body.category,
      City: req.body.city,
      State: req.body.state,
      Location: req.body.location,
      Product_video: req.body.product_video,
      Total_earn: req.body.total_earn,
      Total_user: req.body.total_user,
      Total_stock: req.body.total_stock,
      Is_verified: req.body.is_verified,
      Pay_Method: req.body.pay_method,
      Pay_History: req.body.pay_history,
      Status: req.body.status,
    })
    await CreateNew.save()
    res.status(200).send({ CreateNew })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const UpdateBuyer = async (req, res) => {
  try {
    const Update = await Buyers.findOne({ id: req.params.id })
    Update.id = uuidv4()
    Update.Name = req.body.name
    Update.Email = req.body.email
    Update.Phone = req.body.phone
    Update.Address = req.body.address
    Update.Image = req.body.image
    Update.Total_product = req.body.total_product
    Update.Brand = req.body.brand
    Update.Category = req.body.category
    Update.City = req.body.city
    Update.State = req.body.state
    Update.Location = req.body.location
    Update.Product_video = req.body.product_video
    Update.Total_earn = req.body.total_earn
    Update.Total_user = req.body.total_user
    Update.Total_stock = req.body.total_stock
    Update.Is_verified = req.body.is_verified
    Update.Pay_Method = req.body.pay_method
    Update.Pay_History = req.body.pay_history
    Update.Status = req.body.status
    Update.save()
    res.status(200).send({ Update })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const DeleteBuyer = async (req, res) => {
  try {
    await Buyers.deleteOne({ id: req.params.id })
    res.status(200).send({ message: 'BUYER IS DELETED SUCCESSFULLY' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
module.exports = { GetAll, GetSingle, CreateBuyer, UpdateBuyer, DeleteBuyer }
