// export const USER_SERVER = "http://localhost:5000/api/users"

import axios from 'axios';

let AxiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
  headers: {
    'Content-type': 'application/json'
  },
})

AxiosInstance.interceptors.response.use(function(response) {
  return response;
})

export default AxiosInstance;