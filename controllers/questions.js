const questionsRouter = require('express').Router()
const Question = require('../models/question')

questionsRouter.get('/', async (request, response) => {
  const questions = await Question.find({})
  response.json(questions)
})

questionsRouter.get('/:category', async (request, response) => {
  const questions = await Question.find({category: request.params.category})
  response.json(questions)
})

module.exports = questionsRouter