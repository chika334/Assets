const {User, validateUser} = require('../models/Users');
const mongoose = require('mongoose');
const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt');
const {auth} = require('../middleware/auth')

router.get('/auth', auth, (req, res) => {
  // const user = await (await User.findById(req.user._id)).select('password')
  // res.send(user);
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    firstname: req.user.firstname,
    lastname: req.user.lastname,
    role: req.user.role,
  })
})

// saving users details to the database or registering users
router.post('/', async (req, res) => {
  // checks for error while connecting route
  // const { error } = validateUser(req.body);
  // if(error) return res.status(400).send(error.details[0].message);
  
  // // verifies if user already exit
  // let user = await User.findOne({ email: req.body.email })
  // if (user) return res.status(400).send('User already registered')

  // // gets new users info
  // user = new User({
  //   firstname: req.body.firstname,
  //   lastname: req.body.lastname,
  //   email: req.body.email,
  //   password: req.body.password
  // });

  // const salt = await bcrypt.genSalt(10);
  // user.password = await bcrypt.hash(user.password, salt)

  // // saves the details to the database
  // await user.save();
  
  // const token = user.generateAuthToken();
  // res.header('x-auth-token', token)
  // res.json({
  //   success: true
  // })
  const user = new User(req.body);

    user.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
})

module.exports = router; 