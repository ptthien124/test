import { useState } from "react";
import { useQuery } from "react-query";
import productsApi from "../axios/productsApi";

export type Products = string | object | number | undefined | null;

function useFetch(id: any) {
  const getProduct = async () => {
    const res = await productsApi.get(id);
    return res;
  };

  const { data } = useQuery(["product", id], getProduct);
  return { product: data };
}

export default useFetch;
