const express = require('express')
const app = express()
require('express-async-errors')
const cors = require('cors')
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const questionsRouter = require('./controllers/questions')
const picturesRouter = require('./controllers/pictures')
const mongoose = require('mongoose')

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })

app.use('/', express.static('build')) // look in the build directory to serve frontend

app.use(cors())
app.use(express.json())

app.use('/api/questions', questionsRouter)
app.use('/api/pictures', picturesRouter)

app.use('/api/*', middleware.unknownEndpoint)
app.use(middleware.errorHandler)

app.use('/*', express.static('build'))

module.exports = app