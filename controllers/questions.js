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

questionsRouter.post('/', async (request, response) => {
  const body = request.body
  const newQuestion = new Question({...body})
  const savedQuestion = await newQuestion.save()
  response.json(savedQuestion)
})

module.exports = questionsRouter