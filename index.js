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

const { InMemorySessionStore } = require('./utils/sessionStore');
const sessionStore = new InMemorySessionStore()

io.use((socket, next) => {
  const userID = socket.handshake.auth.userID
  if (userID) {
    // find existing session
    const user = sessionStore.findSession(userID)
    if (user) {
      socket.userID = userID
      socket.roomCode = user.roomCode
      return next()
    }
  }

  // create new session
  socket.userID = randomId(8)
  next()
});

// io.use((socket, next) => {
//   socket.onAny((event, ...args) => {
//     console.log('Catch-all listener', event, args)
//   })
//   next()
// })

io.on('connection', socket => {
  //console.log(`a socket with userID ${socket.userID} has connected`)

  socket.on('create', (empty, callback) => {
    const roomCode = randomId(2)
    socket.emit('create', roomCode)
    socket.join(roomCode)
    callback({})
  })

  socket.on('onJoin', (empty, callback) => {
    const room = getRoomWith(socket.userID)
    if (room) {
      return callback(room.roomCode)
    }
    callback({})
  })

  socket.on('joining', async (roomCode, callback) => {
    const matchingSockets = await io.in(roomCode).allSockets()
    const roomExists = matchingSockets.size === 1
    if (roomExists) {
      // Admit both users into the chat room
      io.to(roomCode).emit('joining', roomCode)
      callback({})
    } else {
      callback({ error: 'The room code does not exist'})
    }
  })

  socket.on('join', (roomCode) => {
    // Admit other user if neccessary
    io.to(roomCode).emit('joining', roomCode)

    // Save session
    sessionStore.saveSession(socket.userID, {
      roomCode
    })

    // Emit session details
    socket.emit('session', {
      userID: socket.userID,
    })

    //Add user into the room
    console.log(`a socket with userID ${socket.userID} has join ${roomCode}`)
    socket.join(roomCode)
    addUserToRoom(roomCode, socket.userID)

    //Welcome user
    socket.emit('message', { content: 'Hello, welcome to sparkchat!', from: 'sparkbot', to: socket.userID })
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
      socket.to(roomCode).emit('message', { content: 'The other user would like to move on to the next question', from: 'sparkbot', to: userID})
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

  //EVERYTHING BELOW INGNORE FOR NOW
  socket.on('debug', () => {
    console.log('unload')
  })

  // notify users upon disconnection
  socket.on('disconnect', async () => {
    const matchingSockets = await io.in(socket.userID).allSockets();
    const isDisconnected = matchingSockets.size === 0;
    if (isDisconnected) {
      // notify other users
      socket.broadcast.emit('user disconnected', socket.userID); //not implemented yet
      // update the connection status of the session
      sessionStore.saveSession(socket.sessionID, {
        userID: socket.userID,
        connected: false,
      })
    }
  })
})

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})