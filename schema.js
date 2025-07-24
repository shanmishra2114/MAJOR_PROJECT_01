const joi = require("joi");
const listing = require("./models/listings");

module.exports.listingSchema = joi.object({
  listing: joi
    .object({
      title: joi.string().required(),
      description: joi.string().required(),
      location: joi.string().required(),
      country: joi.string().required(),
      price: joi.number().required().min(0),
      image: joi.string().allow("", null),
    })
    .required(),
});

module.exports.reviewSchema = joi.object({
  rating: joi.number().required().min(0).max(5).strict(false),
  comment: joi.string().required(),
});