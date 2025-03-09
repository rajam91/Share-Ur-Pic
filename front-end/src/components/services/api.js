import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4001',
});

export const loginUser = async (email, password) => {
  return await api.post('/auth/login', { mail: email, password });
};

export const registerUser = async (name, firstname, email, password) => {
  return await api.post('/auth/register', { name, firstname, mail: email, password });
};
