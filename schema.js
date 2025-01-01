const joi = require("joi");

const listingSchema = joi.object({
  listing: joi
    .object({
      title: joi.string().required(),
      image: joi.string().allow("", null),
      description: joi.string().required(),
      price: joi.number().required().min(0),
      location: joi.string().required(),
      country: joi.string().required(),
    })
    .required(),
});

module.exports = listingSchema;
