const Question = require('../models/question')

const initialQuestions = [
  {
    id: 1,
    category: 'this-or-that',
    question: 'Morning or Night'
  },
  {
    id: 2,
    category: 'this-or-that',
    question: 'Coffee or Tea'
  },
  {
    id: 3,
    category: 'this-or-that',
    question: 'Indoors or Outdoors'
  },
  {
    id: 4,
    category: 'deep-questions',
    question: 'Why do we exist?'
  }
]

const nonExistingId = async () => {
  const question = new Question({ category: 'willremovethissoon', question: 'willremovethissoon?' })
  await question.save()
  await question.remove()

  return question._id.toString()
}

const questionsInDb = async () => {
  const questions = await Question.find({})
  return questions.map(question => question.toJSON())
}

module.exports = {
  initialQuestions,
  nonExistingId,
  questionsInDb
}