const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

describe('fetching random pictures', () => {
  test('succeed with one picture', async () => {
    await api
      .get('/api/pictures/random')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('succeed with count', async () => {
    const response = await api
      .get('/api/pictures/random/3')
      .expect(200)
      .expect('Content-Type', /application\/json/)

    expect(response.body).toHaveLength(3)
  })

  test('succeed with orientation', async () => {
    await api
      .get('/api/pictures/random/1/landscape')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })
})

describe('fetching pictures with query', () => {
  test('succeed with single query', async () => {
    await api
      .get('/api/pictures/query/cat')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('succeed with count', async () => {
    const response = await api
      .get('/api/pictures/query/cat/2')
      .expect(200)
      .expect('Content-Type', /application\/json/)

    expect(response.body).toHaveLength(2)
  })

  test('succeed with orientation', async () => {
    const response = await api
      .get('/api/pictures/query/cat/2/squarish')
      .expect(200)
      .expect('Content-Type', /application\/json/)

    expect(response.body).toHaveLength(2)
  })
})

describe('fetching with topics', () => {
  test('succeed fetching list of topics', async () => {
    await api
      .get('/api/pictures/query/topics')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('succeed with random topic', async () => {
    await api
      .get('/api/pictures/topic/animals')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('fails with invalid case sensitivity', async () => {
    await api
      .get('/api/pictures/topic/Animals')
      .expect(400)
      .expect('Content-Type', /application\/json/)
  })

  test('succeeds with multiple topics', async () => {
    await api
      .get('/api/pictures/topic/animals,people')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('succeed with count', async () => {
    const response = await api
      .get('/api/pictures/topic/animals,people/3')
      .expect(200)
      .expect('Content-Type', /application\/json/)

    expect(response.body).toHaveLength(3)
  })

  test('succeed with orientation', async () => {
    const response = await api
      .get('/api/pictures/topic/animals,people/2/portrait')
      .expect(200)
      .expect('Content-Type', /application\/json/)

    expect(response.body).toHaveLength(2)
  })
})

afterAll(() => {
  mongoose.disconnect();
})