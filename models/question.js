const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
  category: {
    type: [String],
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  questionAlt: String,
  level: {
    type: String,
    required: true,
  },
  canPicture: {
    type: Boolean,
    required: true,
  },
  this: String,
  that: String,
  topic: String,
})

questionSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Question', questionSchema)