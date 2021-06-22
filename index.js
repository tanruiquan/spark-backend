const app = require('./app')
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')
const socketio = require('socket.io')
const { addUser, removeUser, getUser, getUserInRoom } = require('./utils/users')

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

  socket.on('join', (userID, callback) => {
    console.log('on join: the socket.userID is', userID)
    addUser(userID)

    // THIS IS FOR TESTING ONLY
    socket.join('TEST ROOM')
    console.log(socket.rooms)

    socket.emit('message', { content: 'Hello, welcome to sparkchat!', from: 'sparkbot', to: userID })

    callback()
  })


  // forward the private message to the right recipient (and to other tabs of the sender)
  socket.on('private message', ({ content, to }, callback) => {
    io.to('TEST ROOM').emit('message', {
      content,
      from: socket.userID,
      to,
    })
    callback()
  })

  socket.on('disconnect', () => {
    console.log(`a socket with userID ${socket.userID} has disconnected`)
    removeUser(socket.userID)
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
      });
    }
  });

  //NOT USE FOR NOW< THIS IS RUBBISH
  socket.on('create', callback => {
    addUser(socket.id)
    socket.emit('message', { content: 'Hello, welcome to sparkchat!' })
  })
})

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})