const express = require('express');

const reviewController = require('../controllers/reviewController');
const authController = require('./../controllers/authController');

const router = express.Router({ mergeParams: true });

//nesting routes make a lot of sense when there is a clear parent child relation among the resources
// posting a new review: (POST /tour/:tour_id/reviews) and user_id comes from currently logged in user
// GET /tour/:tour_id/reviews
// GET /tour/:tour_id/reviews/:review_id

//only logged users can work with reviews
router.use(authController.protect);

//only users can post reviews
router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.restrictTo('user'),
    reviewController.setTourAndUserIds,
    reviewController.createReview
  );

//only users and admins can delete or modify a review
router
  .route('/:id')
  .delete(
    authController.restrictTo('user', 'admin'),
    reviewController.deleteReview
  )
  .patch(
    authController.restrictTo('user', 'admin'),
    reviewController.updateReview
  )
  .get(reviewController.getReview);

module.exports = router;
