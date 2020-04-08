import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tindev-backend-gustavo-tp.herokuapp.com',
});

export default api;
