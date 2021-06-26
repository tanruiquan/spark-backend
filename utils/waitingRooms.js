const waitingRooms = []

const addRoom = (roomCode) => {
  waitingRooms.push(roomCode)
  return roomCode
}

const removeRoom = (roomCode) => {
  const index = waitingRooms.findIndex(room => room === roomCode)
  if (index !== -1) {
    return waitingRooms.splice(index, 1)[0]
  }
}

const getRoom = () => {
  const firstRoom = waitingRooms.shift()
  return firstRoom
}

const getAllRooms = () => {
  return waitingRooms
}

module.exports = { addRoom, removeRoom, getRoom, getAllRooms }