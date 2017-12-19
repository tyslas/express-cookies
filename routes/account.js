const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

router.get('/', (req, res) => {
  queries.displayUsers()
    .then(users => {
      res.render('account', {users: users})
  })
})

module.exports = router;
