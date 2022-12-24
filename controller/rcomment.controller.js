const { v4: uuidv4 } = require('uuid')
const rComments=require("../model/rcomment.model")
const GetAll = async (req, res) => {
  try {
    const GetAll = await rComments.find()
    res.status(200).send({ GetAll })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const GetSingle = async (req, res) => {
  try {
    const GetSingle = await rComments.findOne({ id: req.params.id })
    res.status(200).send({ GetSingle })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const CreateRcomment = async (req, res) => {
  try {
    const NewComment = new rComments({
      id: uuidv4(),
      Name: req.body.name,
      Phone: req.body.phone,
      Email: req.body.email,
      Address: req.body.address,
      user_type: req.body.user_type,
      Comment: req.body.comment,
      rComment: req.body.rcomment,
      Image: req.body.image,
      Category: req.body.category,
      Status: req.body.status,
    })
    await NewComment.save()
    res.status(200).send({ NewComment })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const UpdateRcomment = async (req, res) => {
  try {
    const Update = await rComments.findOne({ id: req.params.id })
    Update.id = uuidv4()
    Update.Name = req.body.name
    Update.Phone = req.body.phone
    Update.Email = req.body.email
    Update.Address = req.body.address
    Update.user_type = req.body.user_type
    Update.Comment = req.body.comment
    Update.rComment = req.body.rcomment
    Update.Image = req.body.image
    Update.Category = req.body.category
    Update.Status = req.body.status
    Update.save()
    res.status(200).send({ Update })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const DeleteRcomment = async (req, res) => {
  try {
    await rComments.deleteOne({ id: req.params.id })
    res.status(200).send({ message: 'COMMNENT IS DELETED SUCCESSFULLY' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
module.exports = {
  GetAll,
  GetSingle,
  CreateRcomment,
  UpdateRcomment,
  DeleteRcomment,
}
