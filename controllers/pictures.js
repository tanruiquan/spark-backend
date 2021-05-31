const picturesRouter = require('express').Router()
const {createApi} = require('unsplash-js')
const config = require('../utils/config')
const nodeFetch = require('node-fetch')

const unsplash = createApi({
  accessKey: config.UNSPLASH_API_KEY,
  fetch: nodeFetch
})

picturesRouter.get('/random', async (request, response) => {
  const randomPicture = await unsplash.photos.getRandom({})
  response.json(randomPicture.response)
})

picturesRouter.get('/:query/:count', async (request, response) => {
  const randomPictures = await unsplash.photos.getRandom({
    query: request.params.query,
    count: request.params.count
  })
  response.json(randomPictures.response)
})

picturesRouter.get('/topic/:topic', async (request, response) => {
  const pictures = await unsplash.topics.getPhotos({
    topicIdOrSlug: request.params.topic
  })
  response.json(pictures.response)

})

module.exports = picturesRouter