import axios from 'axios';

const api = axios.create({
  baseURL: 'https://quaint-print-server.onrender.com/',
  withCredentials: true,
});

export default api;
