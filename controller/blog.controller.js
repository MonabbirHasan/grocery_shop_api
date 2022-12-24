const { v4: uuidv4 } = require('uuid')
const Blogs = require('../model/blog.model')

const GetAll = async (req, res) => {
  try {
    const GetAll = await Blogs.find()
    res.status(200).send({ GetAll })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const GetSingle = async (req, res) => {
  try {
    const GetSingle = await Blogs.findOne({ id: req.params.id })
    res.status(200).send({ GetSingle })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const CreateBlog = async (req, res) => {
  try {
    const CreateNew = new Blogs({
      id: uuidv4(),
      Title: req.body.title,
      Author: req.body.author,
      Thumbnail: req.body.thumbnail,
      Category: req.body.category,
      Brand: req.body.brand,
      Desc: req.body.desc,
      Email: req.body.email,
      Phone: req.body.phone,
      Address: req.body.address,
      user_type: req.body.user_type,
      Comment: req.body.comment,
      Status: req.body.status,
    })
    await CreateNew.save()
    res.status(200).send({ CreateNew })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const UpdateBlog = async (req, res) => {
  try {
    const Update = await Blogs.findOne({ id: req.params.id })
    Update.id=uuidv4()
    Update.Title = req.body.title
    Update.Author = req.body.author
    Update.Thumbnail = req.body.thumbnail
    Update.Category = req.body.category
    Update.Brand = req.body.brand
    Update.Desc = req.body.desc
    Update.Email = req.body.email
    Update.Phone = req.body.phone
    Update.Address = req.body.address
    Update.user_type = req.body.user_type
    Update.Comment = req.body.comment
    Update.Status = req.body.status
    Update.save()
    res.status(200).send({ Update })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const DeleteBlog = async (req, res) => {
  try {
    await Blogs.deleteOne({ id: req.params.id })
    res.status(200).send({ message: 'BLOG DELETED SUCCESSFULLY' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
module.exports = { GetAll, GetSingle, CreateBlog, UpdateBlog, DeleteBlog }
