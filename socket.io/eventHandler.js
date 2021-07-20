const { addUserToRoom, removeUserFromRoom, getRoomWith, getOtherUserIn, canNext, resetNext } = require('./utils/rooms')
const { getWaitingRoom, removeWaitingRoom, addWaitingRoom } = require('./utils/waitingRooms')

const crypto = require('crypto')
const randomId = (bytes) => crypto.randomBytes(bytes).toString('hex')

module.exports = (io, socket) => {
  const createRoom = () => {
    const roomCode = randomId(2)
    socket.emit('create', roomCode)
    socket.join(roomCode)
  }

  const onJoining = async (roomCode, callback) => {
    if (process.env.NODE_ENV === 'test:cy') return callback({})
    const otherUser = getOtherUserIn(roomCode, socket.userID)
    const matchingSockets = await io.in(roomCode).allSockets()
    const roomExist = matchingSockets.size === 1 || otherUser
    if (roomExist) {
      // Admit user into the chatroom
      callback({})
    } else {
      callback({ error: 'The room code does not exist'})
    }
  }

  const joinRoom = (roomCode) => {
    // Admit other user into the chatroom
    socket.to(roomCode).emit('joining', roomCode)

    // Emit session details
    socket.emit('session', {
      userID: socket.userID,
    })

    //Add user into the room
    socket.join(roomCode)
    addUserToRoom(roomCode, socket.userID)

    //Welcome user
    socket.emit('message', { content: 'Welcome to the chat! Please be nice!', from: 'sparkbot', to: socket.userID })
  }

  const onWaiting = (empty, callback) => {
    const room = getWaitingRoom()
    if (room) {
      callback(room.roomCode)
    } else {
      const roomCode = randomId(2)
      addWaitingRoom(roomCode, socket.userID)
      socket.join(roomCode)
      callback()
    }
  }

  const leaveWaitingRoom = () => {
    removeWaitingRoom(socket.userID)
  }

  const setQuestions = (questions) => {
    const room = getRoomWith(socket.userID)
    if (room) {
      io.to(room.roomCode).emit('setQuestions', questions)
    }
  }

  const nextQuestion = () => {
    const userID = socket.userID
    const room = getRoomWith(userID)
    if (room) {
      const roomCode = room.roomCode
      if (canNext(userID)) {
        resetNext(userID)
        io.to(roomCode).emit('next')
      } else {
        socket.to(roomCode).emit('message', { content: 'The other user would like to move on to the next question. Select \'Next\' to go on!', from: 'sparkbot', to: 'otherPlayer'})
        socket.emit('message', { content: 'Your request to move to next question has been sent to the other user. Please wait for them to click Next', from: 'sparkbot', to: userID})
      }
    }
  }

  const sendMessage = ({ content }) => {
    const room = getRoomWith(socket.userID)
    if (room) {
      const roomCode = room.roomCode
      io.to(roomCode).emit('message', {
        content,
        from: socket.userID,
        to: roomCode,
      })
    }
  }

  const leaveRoom = () => {
    const userID = socket.userID
    const room = getRoomWith(userID)
    if (room) {
      const roomCode = room.roomCode
      removeUserFromRoom(roomCode, userID)
      io.to(roomCode).emit('message', {
        content: 'The other user has left the chat',
        from: 'sparkbot',
        to: roomCode
      })
    }
  }

  socket.on('create', createRoom)
  socket.on('joining', onJoining)
  socket.on('join', joinRoom)
  socket.on('waiting', onWaiting)
  socket.on('leaveWaiting', leaveWaitingRoom)
  socket.on('setQuestions', setQuestions)
  socket.on('nextQuestion', nextQuestion)
  socket.on('private message', sendMessage)
  socket.on('leave', leaveRoom)
}