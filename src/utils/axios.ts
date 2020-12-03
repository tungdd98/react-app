import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { useHistory } from "react-router-dom";

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
    const history = useHistory();
    switch (error.response && error.response.status) {
      case 401:
        history.replace({
          pathname: "/",
        });
        break;
      case 404:
        history.replace({
          pathname: "/404",
        });
        break;
      default:
        history.replace({
          pathname: "/not-found",
        });
        break;
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
