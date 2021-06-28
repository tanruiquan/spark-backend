const users = []

const addUser = (userID, roomCode) => {
  const user = {
    userID,
    roomCode
  }
  users.push(user)
  return user
}

const removeUser = (userID) => {
  const index = users.findIndex(user => user.userID === userID)
  if (index !== -1) {
    return users.splice(index, 1)[0]
  }
}

const getUser = (userID) => {
  return users.find(user => user.userID === userID)
}

const getAllUsers = () => {
  return users
}

module.exports = { addUser, removeUser, getUser, getAllUsers }