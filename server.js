const dotenv = require('dotenv');
const setupDB = require('./utils/setupDB');

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

//assign port
const port = process.env.PORT || 3000;
let server;

setupDB().then(
  () => {
    console.log('DB connection successful!');
    //start server
    server = app.listen(port, () => {
      console.log(
        `App running on port ${port}...\nRun mode is ${process.env.NODE_ENV}`
      );
    });
  },
  err => console.log('Failed to connect to DB:', err)
);

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
  server.close(() => {
    console.log('💥 Process terminated!');
  });
});
