const express = require('express')
const app = express()
const cookieSession = require('cookie-session')
const key = process.env.COOKIE_KEY || 'keyboard cat'
const path = require('path')

const port = 3000
const index = require('./routes/index')
const account = require('./routes/account')

app.use(cookieSession({
  name: 'g64',
  keys: [key],

  //Cookie options
  maxAge: 1000 * 24 * 60 * 60 // 24 hours
}))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')))
app.use('/', index)
app.use('/account', account)

app.get('/', (req, res) => {
  if(req.session.count >= 1) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }
  console.log('count:', req.session.count);
  console.log('session:', req.session);
  req.session.favoriteDog = 'Australian Shepherd';
  res.render('index');
})

app.listen(port, () => {
  console.log('listening on port:', port);
})
