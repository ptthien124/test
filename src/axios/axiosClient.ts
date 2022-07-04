import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params: any) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config: any) => {
  // Handle token here ...
  return config;
});

axiosClient.interceptors.response.use(
  (response: any) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error: any) => {
    // Handle errors
    throw error;
  }
);

export default axiosClient;
