const {User, validateUser} = require('../models/Users');
const mongoose = require('mongoose');
const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth');

router.get('/auth', auth, async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.send(user);
})

// saving users details to the database or registering users
router.post('/', async (req, res) => {
  // checks for error while connecting route
  const { error } = validateUser(req.body);
  if(error) return res.status(400).send(error.details[0].message);
  
  // verifies if user already exit
  let user = await User.findOne({ email: req.body.email })
  if (user) return res.status(400).send('User already registered')

  // gets new users info
  user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt)

  // saves the details to the database
  await user.save();
  
  const token = user.generateAuthToken();
  res.header('x-auth-token', token).send(user);
})

module.exports = router; 