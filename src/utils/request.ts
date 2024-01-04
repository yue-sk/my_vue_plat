import axios, {AxiosInstance, AxiosError, AxiosResponse, InternalAxiosRequestConfig} from 'axios';

const service:AxiosInstance = axios.create({
    timeout: 5000
});

service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config;
    },
    (error: AxiosError) => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    (response: AxiosResponse) => {
      if (response.status === 200) {
        return response;
      } else {
        return Promise.reject(response);
      }
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

export default service;