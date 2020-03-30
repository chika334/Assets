const {User} = require('../models/Users');
const mongoose = require('mongoose');
const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt');
const Joi = require('joi')
const jwt = require('jsonwebtoken');
const config = require('config');

// saving users details to the database or registering users
router.post('/', async (req, res) => {
  // checks for error while connecting route
  const { error } = validateUser(req.body);
  if(error) return res.status(400).send(error.details[0].message);
  
  // verifies if user already exit
  let user = await User.findOne({ email: req.body.email })
  if (!user) return res.status(400).send('Invalid Email or password.')

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid Email or password.');

  const token = user.generateAuthToken();

  res.header('x-auth-token', token).send(user);
})

function validateUser(req) {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
  };

  return Joi.validate(req, schema)
}

module.exports = router; 