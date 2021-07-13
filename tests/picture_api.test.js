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
})