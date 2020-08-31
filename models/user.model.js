const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
  name: String,
  tasks: [
    {
      tasktitle: String,
      completed: false,
      _id: {_id: false}
    }
  ]
})

const User = mongoose.model('User', userSchema)

module.exports = User