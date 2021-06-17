const Question = require('../models/question')

const allQuestions = require('./questions.json')

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
  allQuestions,
  nonExistingId,
  questionsInDb
}