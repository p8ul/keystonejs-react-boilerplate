/* eslint-env jest */
import { client, authUserHeader, api } from '../api';

describe('Should test axios api requests', () => {
  it('should test get object', () => {
    client({ url: '/', method: 'get' })
      .then((response) => {
        expect(response).toEqual(Promise({}));
      });
  });

  it('should add authentication for logged in users header', () => {
    expect(authUserHeader()).toHaveProperty('Authorization');
  });

  it('should test update user profile promise', () => {
    api.todo.list({})
      .then((response) => {
        expect(response).toEqual(Promise({}));
      });
    api.todo.create({})
      .then((response) => {
        expect(response).toEqual(Promise({}));
      });
  });
});
