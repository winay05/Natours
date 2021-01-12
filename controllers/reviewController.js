const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const Review = require('./../models/reviewModel');
const factory = require('./handlerFactory');
// const catchAsync = require('./../utils/catchAsync');

exports.setTourUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.checkUser = catchAsync(async (req, res, next) => {
  if (req.user.role === 'admin') return next();

  const reviewBy = (await Review.findById(req.params.id)).user._id;
  if (req.user.id === reviewBy) return next();

  next(
    new AppError(
      'You do not have the permission to perform this opeartion',
      400
    )
  );
});

exports.getAllReviews = factory.getAll(Review);
exports.getReview = factory.getOne(Review);
exports.createReview = factory.createOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);
