import keystone from 'keystone';
import modelHelper from '../../../utils/modelHelper';

const Todo = keystone.list('Todo');

/**
 * List Todos
 */
export const list = (req, res) => {
  const search = new RegExp(req.query.search || '', 'i');
  const query = [
    { title: search },
    { description: search },
  ];
  Todo.paginate({
    page: req.query.page || 1,
    perPage: 5,
    maxPages: 10,
    filters: {
      $or: query,
    },
  }).sort('-createdAt').exec((err, items) => {
    if (err) return res.status(500).json(err);

    return res.json({
      data: items,
    });
  });
};

/**
 * Get Todo by ID
 */
export const get = (req, res) => {
  Todo.model.findById(req.params.id).exec((err, item) => {
    if (err) return res.apiError('database error', err);
    if (!item) return res.apiError('not found');
    return res.status(200).json({
      data: item,
    });
  });
};


/**
 * Create a Todo
 */
export const create = (req, res) => {
  try {
    const instance = new Todo.model();
    const todo = modelHelper.process(instance, req);
    res.status(204).json({
      data: todo,
    });
  } catch (err) {
    res.json({ error: err }, 400);
  }
};

/**
 * Get Todo by ID
 */
export const update = async (req, res) => {
  const { id } = req.params;
  const instance = await Todo.model.findOne({ _id: id });
  if (!instance) {
    return res.status(404).json(
      'Error updating todo',
    );
  }
  const todo = await modelHelper.process(instance, req);
  return res.status(200).json({ item: todo });
};

/**
 * Delete Todo by ID
 */
export const remove = (req, res) => {
  Todo.model.findById(req.params.id).exec((err, item) => {
    if (err) return res.apiError('database error', err);
    if (!item) return res.apiError('not found');

    item.remove((error) => {
      if (error) return res.apiError('database error', error);

      return res.json({
        success: true,
      });
    });
  });
};
