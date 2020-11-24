import axios from 'axios';

const axiosInstance = axios.create({
  baseUrl: 'https://rickandmortyapi.com/api/',
});

export default axiosInstance;
