const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

module.exports = () => {
  // local database
  let DB = process.env.DATABASE_LOCAL;
  if (process.env.npm_config_mode === 'PRODUCTION') {
    // hosted database
    DB = process.env.DATABASE.replace(
      '<PASSWORD>',
      process.env.DATABASE_PASSWORD
    );
  }

  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    .then(
      () => console.log('DB connection successful!'),
      () => console.log('Failed to connect to DB')
    );
};
