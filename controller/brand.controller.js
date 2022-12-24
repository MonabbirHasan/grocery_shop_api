const { v4: uuidv4 } = require('uuid')
const Brands = require('../model/brand.model')
const AllBrand = async (req, res) => {
  try {
    const GetAll = await Brands.find()
    res.status(200).send({ GetAll })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const SingleBrand = async (req, res) => {
  try {
    const GetSingle = await Brands.findOne({ id: req.params.id })
    res.status(200).send({ GetSingle })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const CreateBrand = async (req, res) => {
  try {
    const CreateNew = new Brands({
      id: uuidv4(),
      Name: req.body.name,
      Image: req.body.image,
      Buyer: req.body.buyer,
      Desc: req.body.desc,
      Status: req.body.status,
    })
    await CreateNew.save()
    res.status(200).send({ CreateNew })
  } catch (error) {
    res.status(error.message)
  }
}
const UpdateBrand = async (req, res) => {
  try {
    const Update = await Brands.findOne({ id: req.params.id })
    Update.id = uuidv4()
    Update.Name = req.body.name
    Update.Image = req.body.image
    Update.Buyer = req.body.buyer
    Update.Desc = req.body.desc
    Update.Status = req.body.status
    Update.save()
    res.status(200).send({ Update })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const DeleteBrand = async (req, res) => {
  try {
    await Brands.deleteOne({ id: req.params.id })
    res.status(200).send({ message: 'BRANDS DATA IS DELETED SUCCESSFULLY' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
module.exports = {
  AllBrand,
  SingleBrand,
  CreateBrand,
  UpdateBrand,
  DeleteBrand,
}
