
import supertest from 'supertest';
import keystone from '.';
import Todo from '../../models/Todo';
import { generateToken } from './jwt';

export const createTodo = async (times = 1) => {
  const todos = [];
  for (let i = 0; i < times; i = +1) {
    // eslint-disable-next-line no-await-in-loop
    todos.push(await Todo.model.create({ title: `title${i}`, description: `descript${i}` }));
  }
  return times === 1 ? todos[0] : todos;
};

export default class app {
    static token = generateToken({});

    static app = supertest(keystone.app);

    static __withAuthorization(request) {
      return this.token
        ? request.set('authorization', `Bearer ${this.token}`)
        : request;
    }

    static get(url) {
      const request = this.app.get(url);

      return app.__withAuthorization(request);
    }

    static post(url) {
      const request = this.app.post(url);

      return app.__withAuthorization(request);
    }

    static put(url) {
      const request = this.app.put(url);

      return app.__withAuthorization(request);
    }

    static delete(url) {
      const request = this.app.delete(url);

      return app.__withAuthorization(request);
    }

    static patch(url) {
      const request = this.app.patch(url);

      return app.__withAuthorization(request);
    }
}
