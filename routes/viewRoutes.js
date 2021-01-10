const express = require('express');
const viewController = require('./../controllers/viewController');
const authController = require('./../controllers/authController');
const bookingController = require('./../controllers/bookingController');

const router = express.Router();

// router.use(authController.isLoggeIn);

router.get('/', authController.isLoggeIn, viewController.getOverview);
router.get('/tour/:slug', authController.isLoggeIn, viewController.getTour);
router.get('/login', authController.isLoggeIn, viewController.getLoginForm);
router.get('/me', authController.protect, viewController.getAccount);
router.get('/my-tours', authController.protect, viewController.getMyTours);

// router.post(
//   '/submit-user-data',
//   authController.protect,
//   viewController.updateUserData
// );
module.exports = router;
