const Joi = require("joi");

const registerUserSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().min(6).max(50).required(),
  password: Joi.string().required(),
});

module.exports = registerUserSchema;
