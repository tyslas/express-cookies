const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

router.get('/', (req, res, next) => {
  res.render('index')
})

router.post('/', (req, res, next) => {
  // console.log('[index.js]', req);
  queries.addUser(req.body)
    .then(id => {
      res.redirect('/account')
    })
})

module.exports = router;
