import axios from 'axios';

const axiosInstance = axios.create({
  baseUrl: 'http://localhost:3001/api',
  headers: { 'Access-Control-Allow-Origin': '*' }
});

export default axiosInstance;