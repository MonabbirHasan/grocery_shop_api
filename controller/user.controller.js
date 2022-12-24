const { v4: uuidv4 } = require('uuid')
const Users = require('../model/user.model')
const AllUser = async (req, res) => {
  try {
    const GetAll = await Users.find()
    res.status(200).send({ GetAll })
  } catch (error) {
    res.state(500).send(error.message)
  }
}
const SingleUser = async (req, res) => {
  try {
    const GetSingle = await Users.findOne({ id: req.params.id })
    res.status(200).send({ GetSingle })
  } catch (error) {
    res.state(500).send(error.message)
  }
}
const CreateUser = async (req, res) => {
  try {
    const NewUser = new Users({
      id: uuidv4(),
      Name: req.body.name,
      Email: req.body.email,
      Phone: req.body.phone,
      Address: req.body.address,
      City: req.body.city,
      State: req.body.state,
      Image: req.body.image,
      Desc:req.body.desc,
      user_type: req.body.user_type,
      Status: req.body.status,
    })
    await NewUser.save()
    res.status(200).send({ NewUser })
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const UpdateUser = async (req, res) => {
  try {
    const Update = await Users.findOne({ id: req.params.id })
    Update.id = uuidv4()
    Update.Name = req.body.name
    Update.Email = req.body.email
    Update.Phone = req.body.phone
    Update.Address = req.body.address
    Update.City = req.body.city
    Update.State = req.body.state
    Update.Image = req.body.image
    Update.Desc=req.body.desc
    Update.user_type = req.body.user_type
    Update.Status = req.body.status
    Update.save()
    res.status(200).send(Update)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const DeleteUser = async (req, res) => {
  try {
    await Users.deleteOne({ id: req.params.id })
    res.status(200).send({ message: 'USER IS DELETED SUCCESSFULLY' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  AllUser,
  SingleUser,
  CreateUser,
  UpdateUser,
  DeleteUser,
}
