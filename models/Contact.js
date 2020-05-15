const mongoose = require('mongoose')
const schema = mongoose.Schema

const contactSchema = new schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: String,
  email: String,
  phone: String,
  type: {
    type: String,
    default: 'presonal'
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('contacts', contactSchema)