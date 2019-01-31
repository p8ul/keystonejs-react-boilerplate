import cors from 'cors';
import keystone from 'keystone';
import validate from 'express-validation';

const importRoutes = keystone.importer(__dirname);

export const apiPath = '/api/v1';
export const todoPath = apiPath + '/todo';

const App = (app) => {
  const routes = {
    api: importRoutes('./api'),
  };

  app.use(cors());
  app.get(todoPath, routes.api.todo.index.list);
  app.get(`${todoPath}/:id`, routes.api.todo.index.get);
  app.put(`${todoPath}/:id`, routes.api.todo.index.update);
  app.post(todoPath, routes.api.todo.index.create);

  app.get('/', (req, res) => {
    res.json({ message: 'API endpoint Keystone cms' });
  }); 
};

export default App;
