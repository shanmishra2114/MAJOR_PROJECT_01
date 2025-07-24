const express = require("express");
const Router = express.Router({ mergeParams: true });
const Listing = require("../models/listings.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");

const Review = require("../models/reviews.js");
const {
  validateReview,
  isLoggedIn,
  isReviewOwner,
} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

//reviews
//post route
Router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.postReview)
);

// review delete route
Router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewOwner,
  wrapAsync(reviewController.destroyReview)
);

module.exports = Router;
