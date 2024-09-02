import axios from 'axios';

const api = axios.create({
  baseURL: 'https://quaint-print-server.onrender.com/api/v1',
  withCredentials: true,
});

export default api;
