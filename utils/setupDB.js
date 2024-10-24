const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

module.exports = () => {
  let DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
  );

  if (process.env.NODE_ENV === 'development') {
    // local database
    DB = process.env.DATABASE_LOCAL;
  }

  return mongoose.connect(DB);
};
