import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://reqres.in/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
});

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    //
    return config;
  },
  (error: AxiosError) => {
    //
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    //
    return response.data;
  },
  (error: AxiosError) => {
    //
    return Promise.reject(error);
  }
);

export default axiosInstance;
