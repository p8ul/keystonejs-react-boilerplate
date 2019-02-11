const keystone = require('keystone');

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
    return res.json({
      data: item,
    });
  });
};


/**
 * Create a Todo
 */
export const create = (req, res) => {
  const item = new Todo.model();

  const data = (req.method === 'POST') ? req.body : req.query;

  item.getUpdateHandler(req).process(data, (err) => {
    if (err) return res.json({ error: err }, 400);

    res.json({
      data: item,
    });
  });
};

/**
 * Get Todo by ID
 */
export const update = (req, res) => {
  Todo.model.findById(req.params.id).exec((err, item) => {
    if (err) return res.apiError('database error', err);
    if (!item) return res.apiError('not found');

    const data = (req.method === 'POST') ? req.body : req.query;

    item.getUpdateHandler(req).process(data, (err) => {
      if (err) return res.apiError('create error', err);

      return res.json({
        data: item,
      });
    });
  });
};

/**
 * Delete Todo by ID
 */
export const remove = (req, res) => {
  Todo.model.findById(req.params.id).exec((err, item) => {
    if (err) return res.apiError('database error', err);
    if (!item) return res.apiError('not found');

    item.remove((err) => {
      if (err) return res.apiError('database error', err);

      return res.json({
        success: true,
      });
    });
  });
};
