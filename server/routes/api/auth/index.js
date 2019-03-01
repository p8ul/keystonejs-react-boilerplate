import keystone from 'keystone';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import responseMessage from '../../../constants/responseMessage';

export const User = () => keystone.list('User');

export const login = async (req, res) => {
  const { email, password } = req.body;

  const query = { email };

  try {
    const userData = await User().model.findOne(query);

    if (!userData) { return res.sendError(responseMessage.INVALID_CREDENTIALS, 401); }

    const validPassword = await bcrypt.compare(password, userData.password);

    if (!validPassword) { return res.sendError(responseMessage.INVALID_CREDENTIALS, 401); }

    const payload = {
      id: userData._id,
      username: userData.username,
      email: userData.email,
      groups: userData.groups,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET);
    const data = {
      user: {
        ...payload,
        token,
      },
    };
    return res.sendSuccess(data, 200, responseMessage.SUCCESSFUL_LOGIN);
  } catch (err) {
    const error = err.message || '';
    return res.sendError(responseMessage.INTERNAL_SERVER_ERROR, 500, error);
  }
};
