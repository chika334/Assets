const dotenv = require('dotenv');

dotenv.config();

export default {
  JWT_SECRET: process.env.jwtPrivateKey
}