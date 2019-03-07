import Joi from 'joi';

const createUser = {
  body: {
    email: Joi.when('username', {
      is: Joi.exist(),
      then: Joi.string().email(),
      otherwise: Joi.string()
        .email()
        .required(),
    }),
    password: Joi.string().required(),
  },
};


export default createUser;
