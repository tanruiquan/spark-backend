require('dotenv').config()

let PORT = process.env.PORT
let MONGODB_URI = process.env.NODE_ENV === 'test'
  ? process.env.TEST_MONGODB_URI
  : process.env.MONGODB_URI
let UNSPLASH_API_KEY = process.env.UNSPLASH_API_KEY

module.exports = {
  PORT,
  MONGODB_URI,
  UNSPLASH_API_KEY
}