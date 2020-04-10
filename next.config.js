require('dotenv').config();

module.exports = {
  env: {
    APP_NAME: process.env.APP_NAME,
    PORT: process.env.PORT,
    URL: process.env.URL,
  },
};
