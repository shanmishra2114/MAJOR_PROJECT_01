const express = require("express");
const Router = express.Router();
const Listing = require("../models/listings.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage })

Router.route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    upload.single('listing[image]'),
     validateListing,
    wrapAsync(listingController.createListing)
  );
  

//new route
Router.get("/new", isLoggedIn, listingController.renderNewform);


Router.route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
  isLoggedIn,
  isOwner,
  upload.single('listing[image]'),
  validateListing,
  wrapAsync(listingController.updateListing)
  )
  .delete(
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.destroyListing)
  );




//edit route
Router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.editListing)
);


module.exports = Router;
