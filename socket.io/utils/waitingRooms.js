const waitingRooms = []

const addWaitingRoom = (roomCode, userID) => {
  const newRoom = {
    roomCode,
    userID,
  }
  waitingRooms.push(newRoom)
  return newRoom
}

const removeWaitingRoom = (userID) => {
  const index = waitingRooms.findIndex(room => room.userID === userID)
  if (index !== -1) {
    return waitingRooms.splice(index, 1)[0]
  }
}

const getWaitingRoom = () => {
  if (process.env.NODE_ENV === 'test:cy') {
    return {
      roomCode: '1234',
      userID: 'user'
    }
  }
  return waitingRooms.shift()
}

module.exports = { addWaitingRoom, removeWaitingRoom, getWaitingRoom }