const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

module.exports = () => {
  let DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
  );

  if (process.env.npm_config_mode === 'DEVELOPMENT') {
    // local database
    DB = process.env.DATABASE_LOCAL;
  }

  mongoose
    .connect(DB, {})
    .then(
      () => console.log('DB connection successful!'),
      err => console.log('Failed to connect to DB:', err)
    );
};
