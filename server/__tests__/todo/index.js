import expect from 'expect';
import app, { createTodo } from '../utils/base';
import { todoPath } from '../../routes';

const todoData = {
  title: 'title',
  description: 'description',
};


const apiCreateTodo = (data = todoData) => app.post(todoPath).send(data);

const apiUpdateTodo = (id, data = todoData) => app.put(`${todoPath}/${id}`).send(data);

const apiListTodo = (parameters = {}) => app
  .get(todoPath)
  .query(parameters)
  .send();

const apiGetTodo = id => app.get(`${todoPath}/${id}`).send();

const apiDeleteTodo = id => app.delete(`${todoPath}/${id}`).send();

describe('Todo', () => {
  let res;
  describe('Create todo', () => {
    it('should create todo successfully when data is valid', async () => {
      res = await apiCreateTodo();
      expect(res.status).toBe(201);
    });
  });

  describe('Update todo', () => {
    it('should update todo successfully when data is valid', async () => {
      const todo = await createTodo();
      res = await apiUpdateTodo(todo._id);
      expect(res.status).toBe(200);
    });
  });

  describe('Get todo', () => {
    it('should get todo successfully when data is valid', async () => {
      const todo = await createTodo();
      res = await apiGetTodo(todo._id);
      expect(res.status).toBe(200);
    });
  });

  describe('Delet todo', () => {
    it('should delete todo successfully when data is valid', async () => {
      const todo = await createTodo();
      res = await apiDeleteTodo(todo._id);
      expect(res.status).toBe(200);
    });
  });

  describe('List todo', () => {
    it('should list todo successfully', async () => {
      res = await apiListTodo();
      expect(res.status).toBe(200);
    });
  });
});
