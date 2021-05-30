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

questionsRouter.get('/:id', async (request, response) => {
  const question = await Question.findById(request.params.id)
  if (question) {
    response.json(question)
  } else {
    response.status(404).send({error: 'question with this id does not exist'}).end()
  }
})

module.exports = questionsRouter