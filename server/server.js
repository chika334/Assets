const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('config');
const morgan = require('morgan');
const cors = require('cors')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const users = require('./routes/users');
const login = require('./routes/login');

if (!config.get('jwtPrivateKey')) {
  console.error('Fatal error: jwtPrivateKey not defined');
  process.exit(1);
}

app.use(cors({ origin: true, credentials: true }))
app.use(morgan('dev'));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(cookieParser());

mongoose.connect('mongodb://localhost/assets')
  .then(() => console.log('Connected to mongoDB'))
  .catch(err => console.error('Could not connect to mongoDB'))

app.use(express.json());
app.use('/api/users', users);
app.use('/api/login', login);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('asset/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'asset', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`connected to port ${port}`)
})