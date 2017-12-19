const db = require('./connection');

function displayUsers () {
  return db('username').select();
}

function addUser(user) {
  return db('username').insert(user).returning('id')
    .then(arr => arr[0])
}

function getUserByName(user) {
  return db('username')
    .where('username', user)
}

module.exports = {
  displayUsers,
  addUser,
  getUserByName
};
