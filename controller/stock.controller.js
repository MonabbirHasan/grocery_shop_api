const { v4: uuidv4 } = require('uuid')
const Stocks = require('../model/stock.model')

const GetAll = async (req, res) => {
  try {
    const GetAll = await Stocks.find()
    res.status(200).send({ GetAll })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const GetSingle = async (req, res) => {
  try {
    const GetSingle = await Stocks.findOne({ id: req.params.id })
    res.status(200).send({ GetSingle })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const CreateStock = async (req, res) => {
  try {
    const CreateNew = new Stocks({
      id: uuidv4(),
      Brand: req.body.brand,
      Product_Name: req.body.product_name,
      Product_Weight: req.body.product_weight,
      Product_Color: req.body.product_color,
      Image: req.body.image,
      Category: req.body.category,
      Author: req.body.author,
      In_Stock: req.body.in_stock,
      Is_Valid: req.body.is_valid,
      Location: req.body.location,
      Import_Date: req.body.import_date,
      Expire_Date: req.body.expire_date,
      Is_Sold: req.body.is_sold,
      Status: req.body.status,
    })
    await CreateNew.save()
    res.status(200).send({ CreateNew })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const UpdateStock = async (req, res) => {
  try {
    const Update = await Stocks.findOne({ id:req. params.id })
    Update.id = uuidv4()
    Update.Brand = req.body.brand
    Update.Product_Name = req.body.product_name
    Update.Product_Weight = req.body.product_weight
    Update.Product_Color = req.body.product_color
    Update.Image = req.body.image
    Update.Category = req.body.category
    Update.Author = req.body.author
    Update.In_Stock = req.body.in_stock
    Update.Is_Valid = req.body.is_valid
    Update.Location = req.body.location
    Update.Import_Date = req.body.import_date
    Update.Expire_Date = req.body.expire_date
    Update.Is_Sold = req.body.is_sold
    Update.Status = req.body.status
    Update.save()
    res.status(200).send({ Update })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const DeleteStock = async (req, res) => {
  try {
    await Stocks.deleteOne({ id: req.params.id })
    res.status(200).send({ message: 'STOCK DATA IS DELETED SUCCESSFULLY' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
module.exports = { GetAll, GetSingle, CreateStock, UpdateStock, DeleteStock }
