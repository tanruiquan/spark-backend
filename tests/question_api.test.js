const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Question = require('../models/question')
const helper = require('./test_helper')

beforeEach(async () => {
  await Question.deleteMany({})
  await Question.insertMany(helper.initialQuestions)
})

describe('when there is initially some questions saved', () => {
  test('questions are returned as json', async () => {
    await api
      .get('/api/questions')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('all questions are returned', async () => {
    const response = await api.get('/api/questions')
    expect(response.body).toHaveLength(helper.initialQuestions.length)
  })

  test('unique identifier property of the questions is named id', async () => {
    const response = await api.get('/api/questions')
    expect(response.body[0].id).toBeDefined()
  })
})

describe('viewing a specific question', () => {
  test('succeeds with a valid id', async () => {
    const questionsAtStart = await helper.questionsInDb()
    const questionToView = questionsAtStart[0]
    const returnedQuestion = await api
      .get(`/api/questions/${questionToView.id}`)
      .expect(200)
      .expect('Content-type', /application\/json/)

    expect(returnedQuestion.body).toEqual(questionToView)
  })

  test('fails with statuscode 404 if question does not exist', async () => {
    const validNoneExistingId = await helper.nonExistingId()
    await api
      .get(`/api/questions/${validNoneExistingId}`)
      .expect(404)
  })

  test('fails with statuscode 400 if id is invalid', async () => {
    const invalidId = '5a3d5da59070081a82a3445'
    await api
      .get(`/api/questions/${invalidId}`)
      .expect(400)
  })
})

afterAll(() => {
  mongoose.connection.close()
})