import axios from 'axios';

export const authUserHeader = () => ({
  Authorization: 'Bearer {token}',
});

export const server = axios.create({
  baseURL: process.env.SERVER_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    ...authUserHeader(),
  },
});
export const apiPath = '/api/v1/';

/**
 *
 * @param {Object} params
 */
export const formatObjectToParams = (params) => {
  // extract url parameters from an object
  let url = '';
  if (typeof params === 'object') {
    if (Object.keys(params).length >= 1) {
      Object.keys(params).forEach((key) => {
        url += `${key}=${params[key]}&`;
      });
      // remove last &
      url = url.slice(0, -1);
    }
  }
  return url;
};

export const api = {
  todo: {
    create: data => server.post(`${apiPath}todo`, data),
    list: params => server.get(`${apiPath}todo?${formatObjectToParams(params)}`),
    delete: id => server.delete(`${apiPath}todo/${id}`),
    edit: data => server.put(`${apiPath}todo/${data._id}`, data),
  },
};
