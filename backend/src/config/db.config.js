const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  local:{
    localDataBaseUrl: process.env.DB_URI,
    secret: "password"
  }
};
