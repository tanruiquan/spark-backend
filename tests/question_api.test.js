const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Question = require('../models/question')
const helper = require('./test_helper')

beforeEach(async () => {
  await Question.deleteMany({})
  await Question.insertMany(helper.allQuestions)
})

describe('with the questions currently saved in the database', () => {
  test('questions are returned as json', async () => {
    await api
      .get('/api/questions')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('all questions are returned', async () => {
    const response = await api.get('/api/questions')
    expect(response.body).toHaveLength(helper.allQuestions.length)
  })

  test('unique identifier property of the questions is named id', async () => {
    const response = await api.get('/api/questions')
    expect(response.body[0].id).toBeDefined()
  })
})

describe('fetching an array of questions based on category', () => {
  test('succeeds with solo mode', async () => {
    const category = 'solo'
    const questionsAtStart = await helper.questionsInDb()
    const questionsToView = questionsAtStart.filter(question => question.category.includes(category))
    const returnedQuestion = await api
      .get(`/api/questions/${category}`)
      .expect(200)
      .expect('Content-type', /application\/json/)

    expect(questionsToView).not.toHaveLength(0)
    expect(returnedQuestion.body).toEqual(questionsToView)
  })

  test('succeeds with story mode', async () => {
    const category = 'story'
    const questionsAtStart = await helper.questionsInDb()
    const questionsToView = questionsAtStart.filter(question => question.category.includes(category))
    const returnedQuestion = await api
      .get(`/api/questions/${category}`)
      .expect(200)
      .expect('Content-type', /application\/json/)

    expect(questionsToView).not.toHaveLength(0)
    expect(returnedQuestion.body).toEqual(questionsToView)
  })

  test('succeeds with icebreakers mode', async () => {
    const category = 'icebreakers'
    const questionsAtStart = await helper.questionsInDb()
    const questionsToView = questionsAtStart.filter(question => question.category.includes(category))
    const returnedQuestion = await api
      .get(`/api/questions/${category}`)
      .expect(200)
      .expect('Content-type', /application\/json/)

    expect(questionsToView).not.toHaveLength(0)
    expect(returnedQuestion.body).toEqual(questionsToView)
  })

  test('succeeds with deep questions mode', async () => {
    const category = 'deep'
    const questionsAtStart = await helper.questionsInDb()
    const questionsToView = questionsAtStart.filter(question => question.category.includes(category))
    const returnedQuestion = await api
      .get(`/api/questions/${category}`)
      .expect(200)
      .expect('Content-type', /application\/json/)

    expect(questionsToView).not.toHaveLength(0)
    expect(returnedQuestion.body).toEqual(questionsToView)
  })

  test('succeeds with this or that mode', async () => {
    const category = 'this-or-that'
    const questionsAtStart = await helper.questionsInDb()
    const questionsToView = questionsAtStart.filter(question => question.category.includes(category))
    const returnedQuestion = await api
      .get(`/api/questions/${category}`)
      .expect(200)
      .expect('Content-type', /application\/json/)

    expect(questionsToView).not.toHaveLength(0)
    expect(returnedQuestion.body).toEqual(questionsToView)
  })

  test('succeeds with online mode', async () => {
    let category = 'online-room'
    const questionsAtStart = await helper.questionsInDb()
    let questionsToView = questionsAtStart.filter(question => question.category.includes(category))
    let returnedQuestion = await api
      .get(`/api/questions/${category}`)
      .expect(200)
      .expect('Content-type', /application\/json/)
    expect(questionsToView).not.toHaveLength(0)
    expect(returnedQuestion.body).toEqual(questionsToView)

    category = 'online-stranger'
    questionsToView = questionsAtStart.filter(question => question.category.includes(category))
    returnedQuestion = await api
      .get(`/api/questions/${category}`)
      .expect(200)
      .expect('Content-type', /application\/json/)
    expect(questionsToView).not.toHaveLength(0)
    expect(returnedQuestion.body).toEqual(questionsToView)
  })

  test('fails with statuscode 400 if category does not exist', async () => {
    const invalidCategory = 'super-dangerous-questions'
    await api
      .get(`/api/questions/${invalidCategory}`)
      .expect(400)
  })
})

describe('fetching an array of questions based on category and level', () => {
  test('succeed with solo mode at level 1', async () => {
    const category = 'solo'
    const level = '1'
    const questionsAtStart = await helper.questionsInDb()
    const questionsToFetch = questionsAtStart
      .filter(question => question.category.includes(category))
      .filter(question => question.level === level)
    const returnedQuestions = await api
      .get(`/api/questions/${category}/${level}`)
      .expect(200)
      .expect('Content-type', /application\/json/)

    expect(questionsToFetch).not.toHaveLength(0)
    expect(returnedQuestions.body).toEqual(questionsToFetch)
  })

  test('fails with statuscode 400 if level is incorrect', async () => {
    const category = 'solo'
    const invalidLevel = 10 //too high
    await api
      .get(`/api/questions/${category}/${invalidLevel}`)
      .expect(400)
  })
})

afterAll(() => {
  mongoose.connection.close()
})