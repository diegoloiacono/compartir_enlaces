const Joi = require("joi");

const createEntrySchema = Joi.object({
  title: Joi.string().min(4).max(100).required(),
  url: Joi.string().min(12).max(100).required(),
  description: Joi.string().min(4).max(100).required(),
});

module.exports = createEntrySchema;
