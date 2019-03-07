import keystone from 'keystone';
import modelHelper from '../../../utils/modelHelper';
import { exclude } from '../../../constants/controllerConstants';

const User = () => keystone.list('User');

/**
 * List Users
 */
export const list = (req, res) => {
  const search = new RegExp(req.query.search || '', 'i');
  const query = [
    { email: search },
    { name: search },
  ];
  User().paginate({
    page: req.query.page || 1,
    perPage: 5,
    maxPages: 10,
    filters: {
      $or: query,
    },
  })
    .select(exclude)
    .sort('-createdAt')
    .exec((err, users) => {
      if (err) return res.status(500).json(err);

      return res.json({
        data: users,
      });
    });
};

/**
 * Get User by ID
 */
export const get = (req, res) => {
  User().model.findById(req.params.id).select(exclude).exec((err, user) => {
    if (err) return res.sendError('database error', err);
    if (!user) return res.sendError('not found');
    return res.status(200).json({
      data: user,
    });
  });
};


/**
 * Create a User
 */
export const create = async (req, res) => {
  try {
    const instance = new User().model();
    const user = await modelHelper.process(instance, req);
    res.status(201).json({
      data: user,
    });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

/**
 * Get User by ID
 */
export const update = async (req, res) => {
  const { id } = req.params;
  const instance = await User().model.findOne({ _id: id });
  if (!instance) {
    return res.status(404).json(
      'Error updating User',
    );
  }
  const user = await modelHelper.process(instance, req);
  return res.status(200).json({ data: user });
};

/**
 * Delete User by ID
 */
export const remove = (req, res) => {
  User().model.findById(req.params.id).exec((err, item) => {
    if (err) return res.sendError('database error', err);
    if (!item) return res.sendError('not found');

    item.remove((error) => {
      if (error) return res.sendError('database error', error);

      return res.json({
        success: true,
      });
    });
  });
};
