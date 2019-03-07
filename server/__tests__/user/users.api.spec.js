import expect from 'expect';
import app, { createUser, faker, removeAllCollections } from '../utils/base';
import { userPath } from '../../routes';
import keystone from '../utils';

const User = () => keystone.list('User');

const UserData = {
  email: `${faker.random.uuid()}-${faker.internet.userName()}@example.com`,
  name: `${faker.random.uuid()}-${faker.internet.userName()}`,
  password: faker.internet.password(),
};


const apiCreateUser = (data = UserData) => app.post(userPath).send(data);

const apiUpdateUser = (id, data = UserData) => app.put(`${userPath}/${id}`).send(data);

const apiListUser = (parameters = {}) => app
  .get(userPath)
  .query(parameters)
  .send();

const apiGetUser = id => app.get(`${userPath}/${id}`).send();

const apiDeleteUser = id => app.delete(`${userPath}/${id}`).send();

describe('User', () => {
  let res;
  beforeEach(() => {
    removeAllCollections(User());
  });
  describe('Create User', () => {
    it('should create User successfully when data is valid', async () => {
      res = await apiCreateUser();
      expect(res.status).toBe(201);
    });
  });

  describe('Update User', () => {
    it('should update User successfully when data is valid', async () => {
      const user = await createUser();
      res = await apiUpdateUser(user._id);
      // console.warn(res);

      expect(res.status).toBe(200);
    });
  });

  describe('Get User', () => {
    it('should get User successfully when data is valid', async () => {
      const user = await createUser();
      res = await apiGetUser(user._id);
      expect(res.status).toBe(200);
    });
  });

  describe('Delete User', () => {
    it('should delete User successfully when data is valid', async () => {
      const user = await createUser();
      res = await apiDeleteUser(user._id);
      expect(res.status).toBe(200);
    });
  });

  describe('List User', () => {
    it('should list User successfully', async () => {
      res = await apiListUser();
      expect(res.status).toBe(200);
    });
  });
});
