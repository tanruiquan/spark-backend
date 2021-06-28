const rooms = []

const addRoom = (roomCode) => {
  const newRoom = {
    roomCode,
    users: [],
    messages: [],
  }
  rooms.push(newRoom)
  return newRoom
}

const removeRoom = (roomCode) => {
  const index = rooms.findIndex(room => room.roomCode === roomCode)
  if (index !== -1) {
    return rooms.splice(index, 1)[0]
  }
}

const addUserToRoom = (roomCode, userID) => {
  const room = rooms.find(room => room.roomCode === roomCode)
  const newUser = {
    userID,
    pressNext: false,
  }
  if (room) {
    const users = room.users
    const userExist = users.find(user => user.userID === userID)
    if (!userExist) {
      users.push(newUser)
    }
  } else {
    const newRoom = {
      roomCode,
      users: [newUser],
      messages: [],
    }
    rooms.push(newRoom)
  }
  return userID
}

const removeUserFromRoom = (roomCode, userID) => {
  const room = rooms.find(room => room.roomCode === roomCode)
  if (room) {
    const users = room.users
    const index = users.findIndex(user => user.userID === userID)
    if (index !== -1) {
      room.users.splice(index, 1)
      if (users.length === 0) {
        removeRoom(roomCode)
      }
    }
  }
}

const getRoom = (roomCode) => {
  return rooms.find(room => room.roomCode === roomCode)
}

const getRoomWith = (userID) => {
  return rooms.find(room => room.users.find(user => user.userID === userID))
}

const getAllRooms = () => {
  return rooms
}

const canNext = (userID) => {
  const room = getRoomWith(userID)
  const users = room.users
  const user = users.find(user => user.userID === userID)
  user.pressNext = true
  const falseUsers = users.filter(user => user.pressNext === false)
  return falseUsers.length === 0
}

const resetNext = (userID) => {
  const room = getRoomWith(userID)
  const users = room.users
  users.map(user => user.pressNext = false)
}

module.exports = {
  addRoom,
  removeRoom,
  addUserToRoom,
  removeUserFromRoom,
  getRoom,
  getRoomWith,
  getAllRooms,
  canNext,
  resetNext,
}