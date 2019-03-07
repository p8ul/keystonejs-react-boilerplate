
import keystone from 'keystone';

const User = () => keystone.list('User');

export const checkEmail = async (req, res, next) => {
  const user = await User().model.findOne({ email: req.body.email });
  if (user) {
    return res.status(422).json({
      message: 'The email exists.',
    });
  }
  next();
};

export default checkEmail;
