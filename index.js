const app = require('./app')
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')
const socketio = require('socket.io')
const { addUserToRoom, removeUserFromRoom, getRoomWith, canNext, resetNext } = require('./utils/rooms')
const { addWaitingRoom, removeWaitingRoom, getWaitingRoom } = require('./utils/waitingRooms')

const server = http.createServer(app)
const io = socketio(server)

const crypto = require('crypto')
const randomId = (bytes) => crypto.randomBytes(bytes).toString('hex')

io.use((socket, next) => {
  // Check if user already exists
  const userID = socket.handshake.auth.userID
  if (userID) {
    socket.userID = userID
    const room = getRoomWith(userID)
    if (room) {
      socket.join(room.roomCode)
    }
    return next()
  }

  // create new user
  socket.userID = randomId(8)
  next()
});

io.on('connection', socket => {
  console.log(`a socket with userID ${socket.userID} has connected`)

  socket.on('create', () => {
    const roomCode = randomId(2)
    socket.emit('create', roomCode)
    socket.join(roomCode)
  })

  socket.on('joining', async (roomCode, callback) => {
    const matchingSockets = await io.in(roomCode).allSockets()
    const roomExists = matchingSockets.size === 1
    if (roomExists) {
      // Admit user into the chatroom
      callback({})
    } else {
      callback({ error: 'The room code does not exist'})
    }
  })

  socket.on('join', (roomCode) => {
    // Admit other user into the chatroom
    socket.to(roomCode).emit('joining', roomCode)

    // Emit session details
    socket.emit('session', {
      userID: socket.userID,
    })

    //Add user into the room
    console.log(`a socket with userID ${socket.userID} has join ${roomCode}`)
    socket.join(roomCode)
    addUserToRoom(roomCode, socket.userID)

    //Welcome user
    socket.emit('message', { content: 'Welcome to the chat! Please be nice!', from: 'sparkbot', to: socket.userID })
  })

  socket.on('waiting', (empty, callback) => {
    const room = getWaitingRoom()
    if (room) {
      callback(room.roomCode)
    } else {
      const roomCode = randomId(2)
      addWaitingRoom(roomCode, socket.userID)
      socket.join(roomCode)
      callback()
    }
  })

  socket.on('leaveWaiting', () => {
    removeWaitingRoom(socket.userID)
  })

  socket.on('setQuestions', (questions) => {
    const room = getRoomWith(socket.userID)
    console.log({room})
    io.to(room.roomCode).emit('setQuestions', questions)
  })

  socket.on('nextQuestion', () => {
    const userID = socket.userID
    const room = getRoomWith(userID)
    const roomCode = room.roomCode
    if (canNext(userID)) {
      resetNext(userID)
      io.to(roomCode).emit('next')
    } else {
      socket.to(roomCode).emit('message', { content: 'The other user would like to move on to the next question. Select \'Next\' to go on!', from: 'sparkbot', to: userID})
    }
  })

  // forward the private message to the right recipient (and to other tabs of the sender)
  socket.on('private message', ({ content }, callback) => {
    const room = getRoomWith(socket.userID)
    const roomCode = room.roomCode
    io.to(roomCode).emit('message', {
      content,
      from: socket.userID,
      to: roomCode,
    })
    callback()
  })

  socket.on('leave', () => {
    console.log(`a socket with userID ${socket.userID} has left`)
    const userID = socket.userID
    const room = getRoomWith(userID)
    const roomCode = room.roomCode
    removeUserFromRoom(roomCode, userID)
    io.to(roomCode).emit('message', {
      content: 'The other user has left the chat',
      from: 'sparkbot',
      to: roomCode
    })
  })

  socket.on('disconnect', () => {
    //console.log(`a socket with userID ${socket.userID} has disconnected`)
  })

  // For debugging
  socket.on('debug', () => {
    console.log('unload')
  })
})

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})