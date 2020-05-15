const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name:'',
  email:'',
  password:'',
  date:{
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('user', userSchema)