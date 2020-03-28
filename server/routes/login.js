const {User} = require('../models/Users');
const mongoose = require('mongoose');
const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt');
const Joi = require('joi')
const jwt = require('jsonwebtoken');
const config = require('config');

// saving users details to the database or registering users
router.post("/", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({
          loginSuccess: false,
          message: "Auth failed, email not found"
      });

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, message: "Wrong password" });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("w_authExp", user.tokenExp);
        res
          .cookie("w_auth", user.token)
          .status(200)
          .json({
            loginSuccess: true, userId: user._id
          });
      });
    });
  });
});

// function validateUser(req) {
//   const schema = {
//     email: Joi.string().min(5).max(255).required().email(),
//     password: Joi.string().min(5).max(255).required()
//   };

//   return Joi.validate(req, schema)
// }

module.exports = router; 