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

describe('viewing an array of questions', () => {
  test('succeeds with a valid category', async () => {
    const category = 'this-or-that'
    const questionsAtStart = await helper.questionsInDb()
    const questionsToView = questionsAtStart.filter(question => question.category.includes(category))
    const returnedQuestion = await api
      .get(`/api/questions/${category}`)
      .expect(200)
      .expect('Content-type', /application\/json/)
    console.log('returnQuestion', returnedQuestion.body)
    expect(returnedQuestion.body).toEqual(questionsToView)
  })

  test('fails with statuscode 404 if category does not exist', async () => {
    const validNoneExistingId = await helper.nonExistingId()
    await api
      .get(`/api/questions/${validNoneExistingId}`)
      .expect(404)
  })
})

afterAll(() => {
  mongoose.connection.close()
})