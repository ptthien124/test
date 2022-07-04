import axiosClient from "./axiosClient";

const productsApi = {
  getAll: (params: any) => {
    const url = "/products";
    return axiosClient.get(url, { params });
  },

  get: (id: any) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
};
export default productsApi;
