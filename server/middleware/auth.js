const jwt = require('jsonwebtoken');
// const config = require('config');
const config = require('../config')
const { JWT_SECRET } = config;

module.exports = function (req, res, next) {

  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({ msg: 'Access denied.' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  }
  catch (ex) {
    res.status(400).json({ msg: 'Invalid token.' });
  }
}