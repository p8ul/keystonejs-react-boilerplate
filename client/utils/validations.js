import Joi from 'joi';

export const todoValidationSchema = Joi.object().options({ abortEarly: false }).keys({
  title: Joi.string().min(3).max(30).required(),
  description: Joi.string().min(3).max(130).required(),
});

export default todoValidationSchema;
