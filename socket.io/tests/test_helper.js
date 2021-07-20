const { addUserToRoom } = require('../utils/rooms')
const { addWaitingRoom } = require('../utils/waitingRooms')

const testingDefaults = () => {
  if (process.env.NODE_ENV === 'test') {
    const userID = 'user'
    const roomCode = '1234'
    addUserToRoom(roomCode, userID)
    addWaitingRoom(roomCode, userID)
  }
}



module.exports = { testingDefaults }