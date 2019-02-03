import axios from 'axios';

export const authUserHeader = () => ({
  Authorization: 'Bearer {token}',
});

export const client = axios.create({
  baseURL: process.env.SERVER_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    ...authUserHeader(),
  },
});
export const apiPath = '/api/v1/';
export const api = {
  todo: {
    create: data => client.post(`${apiPath}todo`, data),
    list: () => client.get(`${apiPath}todo`),
  },
};
