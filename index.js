const app = require('./app')
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')
const socketio = require('socket.io')
const { addUser, removeUser, getUser, getAllUsers } = require('./utils/users')
const { addRoom, removeRoom, getRoom, getAllRooms } = require('./utils/waitingRooms')

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

io.on('connection', socket => {
  console.log(`a socket with userID ${socket.userID} has connected`)

  socket.on('create', (empty, callback) => {
    if (socket.roomCode) {
      return callback({ roomCode: socket.roomCode })
    }

    const roomCode = randomId(2)
    socket.join(roomCode)
    socket.emit('create', roomCode)
    callback({})
  })

  socket.on('onJoin', (empty, callback) => {
    if (socket.roomCode) {
      return callback(socket.roomCode)
    }
    callback({})
  })

  socket.on('joining', async (roomCode, callback) => {
    const matchingSockets = await io.in(roomCode).allSockets()
    const roomExists = matchingSockets.size === 1
    if (roomExists) {
      // Admit both users into the chat room
      callback({})
      io.to(roomCode).emit('joining', roomCode)
    } else {
      callback({ error: 'The room code does not exist'})
    }
  })

  socket.on('join', (roomCode) => {
    // Admit other user if neccessary
    io.to(roomCode).emit('joining', roomCode)

    // Save detail
    socket.roomCode = roomCode

    // Save session
    sessionStore.saveSession(socket.userID, {
      roomCode
    })

    // Emit session details
    socket.emit('session', {
      userID: socket.userID,
      roomCode: socket.roomCode
    })

    //Add user into the room + users array
    console.log(`a socket with userID ${socket.userID} has join ${roomCode}`)
    socket.join(roomCode)
    addUser(socket.userID, roomCode)
    console.log({users: getAllUsers()})

    //Welcome user
    socket.emit('message', { content: 'Hello, welcome to sparkchat!', from: 'sparkbot', to: socket.userID })
  })

  socket.on('waiting', (empty, callback) => {
    let roomCode = getRoom()
    if (roomCode) {
      callback(roomCode)
      removeRoom(roomCode)
    } else {
      roomCode = randomId(2)
      socket.roomCode = roomCode
      socket.join(roomCode)
      addRoom(roomCode)
      callback()
    }
  })

  socket.on('leaveWaiting', () => {
    const roomCode = socket.roomCode
    removeRoom(roomCode)
  })

  // forward the private message to the right recipient (and to other tabs of the sender)
  socket.on('private message', ({ content }, callback) => {
    const user = getUser(socket.userID)
    const roomCode = user.roomCode
    io.to(roomCode).emit('message', {
      content,
      from: socket.userID,
      to: roomCode,
    })
    callback()
  })

  socket.on('leave', () => {
    console.log(`a socket with userID ${socket.userID} has left`)
    const user = getUser(socket.userID)
    const roomCode = user.roomCode
    removeUser(socket.userID)
    console.log({users: getAllUsers()})
    io.to(roomCode).emit('message', {
      content: 'The other user has left the chat',
      from: 'sparkbot',
      to: roomCode
    })
  })

  socket.on('disconnect', () => {
    console.log(`a socket with userID ${socket.userID} has disconnected`)
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