import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { History } from "history";

const AxiosInitiation = (history: History) => {
  axios.defaults.baseURL = "https://reqres.in/api";

  axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      //
      return config;
    },
    (error: AxiosError) => {
      //
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response: AxiosResponse) => {
      //
      return response;
    },
    (error: AxiosError) => {
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
};

export default AxiosInitiation;
