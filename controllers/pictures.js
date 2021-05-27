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
  response.json(randomPicture)
})

module.exports = picturesRouter