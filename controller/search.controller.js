const { v4: uuidv4 } = require('uuid')
const AllSearch = (req, res) => {
  res.status(200).send({ message: 'search success' })
}
const SingleSearch = (req, res) => {
  res.status(200).send({ message: 'search success' })
}
const CreateSearch = (req, res) => {
  res.status(200).send({ message: 'search success' })
}
const UpdateSearch = (req, res) => {
  res.status(200).send({ message: 'search success' })
}
const DeleteSearch = (req, res) => {
  res.status(200).send({ message: 'search success' })
}
module.exports = {
  AllSearch,
  SingleSearch,
  CreateSearch,
  UpdateSearch,
  DeleteSearch,
}
