const Tour = require('../models/tourModel');
const Booking = require('../models/bookingModel');

// const User = require('../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res, next) => {
  //1. get tour data from collection
  const tours = await Tour.find();
  //2. build template

  //3. render template using tour data from step 1

  res.status(200).render('overview', {
    title: 'All Tours',
    tours
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  //1. get the tour data for req tour ( including reviews and tour guides)
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user'
  });

  if (!tour) {
    return next(new AppError('No tour with that name', 404));
  }

  //2. Build template
  //3. render template using the data in option 1
  res.status(200).render('tourTemplate', {
    title: `${tour.name} tour`,
    tour
  });
});

exports.getLoginForm = (req, res) => {
  res.status(200).render('loginTemplate', {
    title: 'Login'
  });
};

exports.getAccount = (req, res) => {
  res.status(200).render('accountTemplate', {
    title: 'Your account'
  });
};

exports.getMyTours = catchAsync(async (req, res, next) => {
  //1.find all bookings
  const bookings = await Booking.find({ user: req.user.id });

  //2.find tours with retured ids
  const tourIDs = bookings.map(el => el.tour);
  const tours = await Tour.find({ _id: { $in: tourIDs } });

  res.status(200).render('overview', {
    title: 'My Tours',
    tours
  });
});

// exports.updateUserData = catchAsync(async (req, res, next) => {
//   // console.log('UPDATING USER', req.body);

//   const updatedUser = await User.findByIdAndUpdate(
//     req.user.id,
//     {
//       name: req.body.name,
//       email: req.body.email
//     },
//     {
//       new: true,
//       runValidators: true
//     }
//   );

//   res.status(200).render('accountTemplate', {
//     title: 'Your account',
//     user: updatedUser
//   });
// });
