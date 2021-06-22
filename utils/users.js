const users = []

const addUser = (id) => {
  const user = {
    userID: id,
  }
  users.push(user)
  return user
}

const removeUser = (id) => {
  const index = users.findIndex(user => user.userID === id)
  if (index !== -1) {
    return users.splice(index, 1)[0]
  }
}

const getUser = (id) => {
  return users.find(user => user.userID === id)
}

module.exports = { addUser, removeUser, getUser }