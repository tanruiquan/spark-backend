const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
  category: {
    type: [String],
    required: true
  },
  question: {
    type: String,
    required: true
  },
  questionAlt: String,
  level: {
    type: Number,
    min: [1, 'level musst at least be 1'],
    max: [3, 'level must at most be 3']
  },
  canPicture: {
    type: Boolean,
    require: true
  },
  this: String,
  that: String,
  topic: String
})

questionSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Question', questionSchema)