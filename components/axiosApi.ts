import axios from 'axios';

const apiAxios = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/',
});

apiAxios.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    if (error.response) {
      const status = error.response.status;
      if (status >= 200 && status < 600) {
        return Promise.resolve(error.response);
      }
    }
    return Promise.reject(error);
  },
);

export default apiAxios;
