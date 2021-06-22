const questionsRouter = require('express').Router()
const Question = require('../models/question')

questionsRouter.get('/', async (request, response) => {
  const questions = await Question.find({})
  response.json(questions)
})

questionsRouter.get('/:category', async (request, response) => {
  const questions = await Question.find({category: request.params.category})
  if (questions.length === 0) {
    response.status(400).end()
  } else {
    response.json(questions)
  }
})

questionsRouter.get('/:category/:level', async (request, response) => {
  const questions = await Question.find({
    category: request.params.category,
    level: request.params.level
  })
  if (questions.length === 0) {
    response.status(400).end()
  } else {
    response.json(questions)
  }
})

questionsRouter.post('/', async (request, response) => {
  const body = request.body
  const newQuestion = new Question({...body})
  const savedQuestion = await newQuestion.save()
  response.json(savedQuestion)
})

module.exports = questionsRouter