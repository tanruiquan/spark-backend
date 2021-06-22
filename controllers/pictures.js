const picturesRouter = require('express').Router()
const env = require('../utils/config')
const axios = require('axios')

const baseUrl = 'https://api.unsplash.com'

picturesRouter.get('/random', async (request, response) => {
  const config = {
    headers: { Authorization: `Client-ID ${env.UNSPLASH_API_KEY}` }
  }
  const res = await axios.get(`${baseUrl}/photos/random`, config)
  response.json(res.data)
})

picturesRouter.get('/random/:count', async (request, response) => {
  const config = {
    headers: { Authorization: `Client-ID ${env.UNSPLASH_API_KEY}` },
    params: {
      count: request.params.count
    }
  }
  const res = await axios.get(`${baseUrl}/photos/random`, config)
  response.json(res.data)
})

picturesRouter.get('/random/:count/:orientation', async (request, response) => {
  const config = {
    headers: { Authorization: `Client-ID ${env.UNSPLASH_API_KEY}` },
    params: {
      count: request.params.count,
      orientation: request.params.orientation
    }
  }
  const res = await axios.get(`${baseUrl}/photos/random`, config)
  response.json(res.data)
})

picturesRouter.get('/query/:query', async (request, response) => {
  const config = {
    headers: { Authorization: `Client-ID ${env.UNSPLASH_API_KEY}` },
    params: {
      query: request.params.query
    }
  }
  const res = await axios.get(`${baseUrl}/photos/random`, config)
  response.json(res.data)
})

picturesRouter.get('/query/:query/:count', async (request, response) => {
  const config = {
    headers: { Authorization: `Client-ID ${env.UNSPLASH_API_KEY}` },
    params: {
      query: request.params.query,
      count: request.params.count
    }
  }
  const res = await axios.get(`${baseUrl}/photos/random`, config)
  response.json(res.data)
})

picturesRouter.get('/query/:query/:count/:orientation', async (request, response) => {
  const config = {
    headers: { Authorization: `Client-ID ${env.UNSPLASH_API_KEY}` },
    params: {
      query: request.params.query,
      count: request.params.count,
      orientation: request.params.orientation
    }
  }
  const res = await axios.get(`${baseUrl}/photos/random`, config)
  response.json(res.data)
})

//does not return photos, returns a list of topics
picturesRouter.get('/topic', async (request, response) => {
  const config = {
    headers: { Authorization: `Client-ID ${env.UNSPLASH_API_KEY}` },
    params: {
      per_page: 35
    }
  }
  const res = await axios.get(`${baseUrl}/topics`, config)
  response.json(res.data)
})

/*
picturesRouter.get('/topic/test', async (request, response) => {
  let config = {
    headers: { Authorization: `Client-ID ${env.UNSPLASH_API_KEY}` }
  }

  config = {
    headers: { Authorization: `Client-ID ${env.UNSPLASH_API_KEY}` },
    params: {
      topics: 'Jpg6Kidl-Hk,towJZFskpGg',
      count: '10',
    }
  }
  const res = await axios.get(`${baseUrl}/photos/random`, config)
  response.json(res.data)
})
*/

//topics are case-sensitve
picturesRouter.get('/topic/:topics', async (request, response) => {
  let config = {
    headers: { Authorization: `Client-ID ${env.UNSPLASH_API_KEY}` }
  }
  const topics = request.params.topics
  const topicsArr = topics.split(',')
  let res = await axios.all(topicsArr.map(topic => axios.get(`${baseUrl}/topics/${topic}`, config)))
  const topicsIdArr = res.map(r => r.data.id)
  const topicsId = topicsIdArr.join()

  config = {
    headers: { Authorization: `Client-ID ${env.UNSPLASH_API_KEY}` },
    params: {
      topics: topicsId
    }
  }
  res = await axios.get(`${baseUrl}/photos/random`, config)
  response.json(res.data)
})

picturesRouter.get('/topic/:topics/:count', async (request, response) => {
  let config = {
    headers: { Authorization: `Client-ID ${env.UNSPLASH_API_KEY}` }
  }
  const topics = request.params.topics
  const topicsArr = topics.split(',')
  let res = await axios.all(topicsArr.map(topic => axios.get(`${baseUrl}/topics/${topic}`, config)))
  const topicsIdArr = res.map(r => r.data.id)
  const topicsId = topicsIdArr.join()

  config = {
    headers: { Authorization: `Client-ID ${env.UNSPLASH_API_KEY}` },
    params: {
      topics: topicsId,
      count: request.params.count
    }
  }
  res = await axios.get(`${baseUrl}/photos/random`, config)
  response.json(res.data)
})

picturesRouter.get('/topic/:topics/:count/:orientation', async (request, response) => {
  let config = {
    headers: { Authorization: `Client-ID ${env.UNSPLASH_API_KEY}` }
  }
  const topics = request.params.topics
  const topicsArr = topics.split(',')
  let res = await axios.all(topicsArr.map(topic => axios.get(`${baseUrl}/topics/${topic}`, config)))
  const topicsIdArr = res.map(r => r.data.id)
  const topicsId = topicsIdArr.join()

  config = {
    headers: { Authorization: `Client-ID ${env.UNSPLASH_API_KEY}` },
    params: {
      topics: topicsId,
      count: request.params.count,
      orientation: request.params.orientation
    }
  }
  res = await axios.get(`${baseUrl}/photos/random`, config)
  response.json(res.data)
})

module.exports = picturesRouter