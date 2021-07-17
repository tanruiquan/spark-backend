const { userMiddleware } = require('../utils/middleware')
const Client = require('socket.io-client');

let httpServer, httpServerAddr, io, clientSocket, serverSocket
beforeAll((done) => {
  httpServer = require('http').createServer().listen()
  httpServerAddr = httpServer.address()
  io = require('socket.io')(httpServer)
  io.use(userMiddleware)
  const registerEventHandler = require('../eventHandler')
  const onConnection = (socket) => {
    serverSocket = socket
    registerEventHandler(io, socket)
  }
  io.on('connection', onConnection)
  done()
})

afterAll((done) => {
  io.close()
  httpServer.close()
  done()
})

describe('In online mode, user', () => {

  beforeEach((done) => {
    clientSocket = new Client(`http://localhost:${httpServerAddr.port}`, {
      reconnectionDelay: 0,
      forceNew: true,
    })
    clientSocket.on('connect', done)
  })

  afterEach((done) => {
    if (clientSocket.connected) {
      clientSocket.disconnect()
    }
    done()
  })

  test('should be able to create room', (done) => {
    clientSocket.on('create', roomCode => {
      expect(roomCode).toHaveLength(4)
      done()
    })
    clientSocket.emit('create')
  })

  test('should be able to join room when room code exists', (done) => {
    clientSocket.on('create', roomCode => {
      clientSocket.emit('joining', roomCode, ({ error }) => {
        expect(error).toBeUndefined()
        done()
      })
    })
    clientSocket.emit('create')
  })

  test('should not be be able to join room when room code don\'t exist', (done) => {
    const invalidRoomCode = 'room'
    clientSocket.emit('joining', invalidRoomCode, ({ error }) => {
      expect(error).toBe('The room code does not exist')
      done()
    })
  })

  test('should stay in the wating room if there is no available waiting room', (done) => {
    clientSocket.emit('waiting', null, roomCode => {
      expect(roomCode).toBeUndefined()
      clientSocket.emit('leaveWaiting')
    })
    serverSocket.on('leaveWaiting', done)
  })

  test('should enter the chat room when there is an available room', (done) => {
    clientSocket.emit('waiting', null, () => {})
    clientSocket.emit('waiting', null, roomCode => {
      expect(roomCode).toBeDefined()
      done()
    })
  })

})

describe('When in the chat room', () => {

  beforeEach((done) => {
    clientSocket = new Client(`http://localhost:${httpServerAddr.port}`, {
      reconnectionDelay: 0,
      forceNew: true,
    })
    clientSocket.on('connect', () => {
      clientSocket.once('message', () => {
        done()
      })
      clientSocket.on('create', roomCode => {
        clientSocket.emit('join', roomCode)
      })
      clientSocket.emit('create')
    })
  })

  afterEach((done) => {
    if (clientSocket.connected) {
      clientSocket.disconnect()
    }
    done()
  })

  test('server can receive questions from client', (done) => {
    const questions = ['question1', 'question2', 'question3']
    serverSocket.on('setQuestions', receivedQuestions => {
      expect(receivedQuestions).toEqual(questions)
      done()
    })
    clientSocket.emit('setQuestions', questions)
  })

  test('client can recieve questions from server', (done) => {
    const questions = ['question1', 'question2', 'question3']
    clientSocket.on('setQuestions', receivedQuestions => {
      expect(receivedQuestions).toEqual(questions)
      done()
    })
    serverSocket.emit('setQuestions', questions)
  })

  test('server can receive message from client', (done) => {
    const msg = {
      content: 'Hello world'
    }

    serverSocket.on('private message', ({ content }) => {
      expect(content).toBe(msg.content)
      done()
    })

    clientSocket.emit('private message', msg)
  })

  test('client can receive message from server', (done) => {
    const msg = {
      content: 'Hello world',
      from: 'player1',
      to: 'player2'
    }

    clientSocket.on('message', ({ content, from, to}) => {
      expect(content).toBe(msg.content)
      expect(from).toBe(msg.from)
      expect(to).toBe(msg.to)
      done()
    })

    serverSocket.emit('message', msg)
  })

  test('server can receive next question request from client', (done) => {
    serverSocket.on('nextQuestion', () => {
      done()
    })
    clientSocket.emit('nextQuestion')
  })

  test('client can receive next question request from server', (done) => {
    clientSocket.on('next', () => {
      done()
    })
    serverSocket.emit('next')
  })

  test('user can leave the room', (done) => {
    clientSocket.on('message', ({content, from, to}) => {
      expect(content).toBe('The other user has left the chat')
      done()
    })
    clientSocket.emit('leave')
  })
})
