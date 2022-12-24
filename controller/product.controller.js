const { v4: uuidv4 } = require('uuid')
const Products = require('../model/product.model')

const AllProduct = async (req, res) => {
  try {
    const GetAll = await Products.find()
    res.status(200).send({ GetAll })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const SingleProduct = async (req, res) => {
  try {
    const GetSingle = await Products.findOne({ id: req.params.id })
    res.status(200).send({ GetSingle })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const CreateProduct = async (req, res) => {
  try {
    const CreateNew = new Products({
      id: uuidv4(),
      Name: req.body.name,
      Weight: req.body.weight,
      Category: req.body.category,
      Rating: req.body.rating,
      Review: req.body.review,
      Offer: req.body.offer,
      Image: req.body.image,
      Author: req.body.author,
      Buyer: req.body.buyer,
      Location: req.body.location,
      City: req.body.city,
      Brand: req.body.brand,
      Delivery_Time: req.body.delivery_time,
      Discount: req.body.discount,
      Import_Date: req.body.import_date,
      Is_Date_Over: req.body.is_date_over,
      Color: req.body.color,
      Image_Arr: req.body.image_arr,
      Video: req.body.video,
      Desc: req.body.desc,
      Is_Sold: req.body.is_sold,
      Is_Valid: req.body.is_valid,
      In_Stock: req.body.is_stock,
      Price: req.body.price,
      Old_Price: req.body.old_price,
      Is_Available: req.body.is_available,
      Comment: req.body.comment,
      Is_Pesticid: req.body.is_pesticid,
      Status: req.body.status,
    })
    await CreateNew.save()
    res.status(200).send({ CreateNew })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const UpdateProduct = async (req, res) => {
  try {
    const Update = await Products.findOne({ id: req.params.id })
    Update.id = uuidv4()
    Update.Name = req.body.name
    Update.Weight = req.body.weight
    Update.Category = req.body.category
    Update.Rating = req.body.rating
    Update.Review = req.body.review
    Update.Offer = req.body.offer
    Update.Image = req.body.image
    Update.Author = req.body.author
    Update.Buyer = req.body.buyer
    Update.Location = req.body.location
    Update.City = req.body.city
    Update.Brand = req.body.brand
    Update.Delivery_Time = req.body.delivery_time
    Update.Discount = req.body.discount
    Update.Import_Date = req.body.import_date
    Update.Is_Date_Over = req.body.is_date_over
    Update.Color = req.body.color
    Update.Image_Arr = req.body.image_arr
    Update.Video = req.body.video
    Update.Desc = req.body.desc
    Update.Is_Sold = req.body.is_sold
    Update.Is_Valid = req.body.is_valid
    Update.In_Stock = req.body.is_stock
    Update.Price = req.body.price
    Update.Old_Price = req.body.old_price
    Update.Is_Available = req.body.is_available
    Update.Comment = req.body.comment
    Update.Is_Pesticid = req.body.is_pesticid
    Update.Status = req.body.status
    Update.save()
    res.status(200).send({ Update })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const DeleteProduct = async (req, res) => {
  try {
    await Products.deleteOne({ id: req.params.id })
    res.status(200).send({ message: 'PRODUCT DATA IS DELETED SUCCESSFULLY' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
module.exports = {
  AllProduct,
  SingleProduct,
  CreateProduct,
  UpdateProduct,
  DeleteProduct,
}
