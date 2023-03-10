import axios from 'axios';
import cors from 'cors';

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

const api = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000
});

api.interceptors.request.use(config => {
  cors(corsOptions)(config);
  return config;
});

export default api;
