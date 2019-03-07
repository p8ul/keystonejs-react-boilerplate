import cors from 'cors';
import keystone from 'keystone';
import validate from 'express-validation';
import validators from '../validators';
import apiResponse from '../middleware/apiResponse';
import errorHandler from '../middleware/errorHandler';
import { checkEmail } from '../middleware/checkEmail';

const importRoutes = keystone.importer(__dirname);
export const apiPath = '/api/v1';
export const todoPath = `${apiPath}/todo`;
export const authPath = `${apiPath}/auth`;
export const userPath = `${apiPath}/user`;

const App = (app) => {
  const routes = {
    api: importRoutes('./api'),
  };

  app.use(cors());
  app.use(apiResponse);

  // auth routes
  app.post(
    `${authPath}/login`,
    validate(validators.login),
    routes.api.auth.index.login,
  );

  // user routes
  app.get(userPath, routes.api.user.index.list);
  app.get(`${userPath}/:id`, routes.api.user.index.get);
  app.put(`${userPath}/:id`, routes.api.user.index.update);
  app.delete(`${userPath}/:id`, routes.api.user.index.remove);
  app.post(
    userPath,
    [validate(validators.createUser),
      checkEmail],
    routes.api.user.index.create,
  );

  // todo routes
  app.get(todoPath, routes.api.todo.index.list);
  app.get(`${todoPath}/:id`, routes.api.todo.index.get);
  app.put(`${todoPath}/:id`, routes.api.todo.index.update);
  app.delete(`${todoPath}/:id`, routes.api.todo.index.remove);
  app.post(todoPath, routes.api.todo.index.create);

  app.get('/', (req, res) => {
    res.json({ message: 'API endpoint Keystone cms' });
  });

  app.use(errorHandler);
};

export default App;
