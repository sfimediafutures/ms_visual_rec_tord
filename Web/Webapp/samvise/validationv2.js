const Joi = require("joi");

// Registration validation
const registrationValidation = (data) => {
  const schema = Joi.object({
    userId: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    userId: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

module.exports.registrationValidation = registrationValidation;
module.exports.loginValidation = loginValidation;
