const app = require('./app')
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')
const socketio = require('socket.io')
const { addUser, removeUser, getUser, getAllUsers } = require('./utils/users')

const server = http.createServer(app)
const io = socketio(server)

const crypto = require('crypto')
const randomId = () => crypto.randomBytes(8).toString('hex')

const { InMemorySessionStore } = require('./utils/sessionStore');
const sessionStore = new InMemorySessionStore();

io.use((socket, next) => {
  const sessionID = socket.handshake.auth.sessionID;
  if (sessionID) {
    // find existing session
    const session = sessionStore.findSession(sessionID);
    if (session) {
      socket.sessionID = sessionID;
      socket.userID = session.userID;
      return next();
    }
  }

  // create new session
  socket.sessionID = randomId();
  socket.userID = randomId();
  next();
});

io.on('connection', socket => {
  console.log(`a socket with userID ${socket.userID} has connected`)

  // persist session
  sessionStore.saveSession(socket.sessionID, {
    userID: socket.userID,
    connected: true,
  })

  // emit session details
  socket.emit('session', {
    sessionID: socket.sessionID,
    userID: socket.userID,
  })

  // join the "userID" room
  socket.join(socket.userID);

  socket.on('join', async (otherUserID, callback) => {
    const matchingSockets = await io.in(otherUserID).allSockets()
    const noSuchRoomCode = matchingSockets.size === 0
    const roomAlreadyExist = getUser(otherUserID)
    if (noSuchRoomCode || roomAlreadyExist) {
      return callback({ error: 'The room code does not exist'})
    }

    //Add both users into the users array
    console.log(`a socket with userID ${socket.userID} has join ${otherUserID}`)
    addUser(socket.userID, otherUserID)
    addUser(otherUserID, socket.userID)
    console.log({users: getAllUsers()})

    //Admit both users into the chat room
    callback({})
    io.to(otherUserID).emit('joined')

    //Welcome both users
    socket.emit('message', { content: 'Hello, welcome to sparkchat!', from: 'sparkbot', to: socket.userID })
    io.to(otherUserID).emit('message', { content: 'Hello, welcome to sparkchat!', from: 'sparkbot', to: otherUserID })
  })

  // forward the private message to the right recipient (and to other tabs of the sender)
  socket.on('private message', ({ content }, callback) => {
    const user = getUser(socket.userID)
    const otherUserID = user.otherUserID
    io.to(socket.userID).to(otherUserID).emit('message', {
      content,
      from: socket.userID,
      to: otherUserID,
    })
    callback()
  })

  socket.on('leave', () => {
    console.log(`a socket with userID ${socket.userID} has left`)
    const user = getUser(socket.userID)
    const otherUserID = user.otherUserID
    removeUser(socket.userID)
    io.to(otherUserID).emit('message', {
      content: 'The other user has left the chat',
      from: 'sparkbot',
      to: otherUserID
    })
  })

  socket.on('disconnect', () => {
    console.log(`a socket with userID ${socket.userID} has disconnected`)
  })

  //EVERYTHING BELOW INGNORE FOR NOW

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