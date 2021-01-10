const AppError = require('../utils/appError');

const handleCastErrorDB = err => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = err => {
  const message = `Duplicate field value: ${err.keyValue.name}. Please use another value`;
  // console.log(message);

  return new AppError(message, 400);
};
const handleValidationErrorDB = err => {
  return new AppError(String(err.message), 400);
};

const handleJWTError = () => {
  return new AppError('Invalid token. Please log in again!', 401);
};

const handleJWTExpiredError = () => {
  return new AppError('Your token has expired! Please login again', 401);
};

const sendErrorDev = (err, req, res) => {
  // API
  if (req.originalUrl.startsWith('/api')) {
    return res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack
    });
  }
  // RENDERED WEBSITE
  console.log('ERROR:', err);
  return res.status(err.statusCode).render('error', {
    title: 'Something went wrong',
    msg: err.message
  });
};

const sendErrorProd = (err, req, res) => {
  //API
  if (req.originalUrl.startsWith('/api')) {
    //operational error, trusted: send message to client
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message
      });
    } //Unkown error: Dont leak details to client

    //1. Log error
    console.error('Error:', err);
    //2. Send generic error
    return res.status(500).json({
      status: 'error',
      message: 'something went wrong!'
    });
  }

  // RENDERED WEBSITE
  //operational error, trusted: send message to client
  if (err.isOperational) {
    // console.log(err);
    return res.status(err.statusCode).render('error', {
      title: 'Something went wrong',
      msg: err.message
    });
  } //Unkown error: Dont leak details to client

  //1. Log error
  console.error('Error:', err);
  //2. Send generic error
  return res.status(500).render('error', {
    title: 'Something went wrong',
    msg: 'Please try again!'
  });
};

module.exports = (err, req, res, next) => {
  //   console.log(err.stack);

  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    // console.log(err.stack.split(' ')[0], err.stack.startsWith('CastError'));
    sendErrorDev(err, req, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    error.message = err.message;
    // console.log(error);
    let cond = String(err.stack).startsWith('CastError');
    if (cond) error = handleCastErrorDB(error);

    if (error.code === 11000) error = handleDuplicateFieldsDB(error);

    //using err instead of error to access message field
    cond = String(err.stack).startsWith('ValidationError');
    if (cond) error = handleValidationErrorDB(err);

    if (error.name === 'JsonWebTokenError') error = handleJWTError();

    if (error.name === 'TokenExpiredError') error = handleJWTExpiredError();

    sendErrorProd(error, req, res);
  }
};
//global error handler
