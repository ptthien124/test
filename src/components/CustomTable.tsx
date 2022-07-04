import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import productsApi from "../axios/productsApi";
import useFetch from "../hooks/useFetch";

const { Column, ColumnGroup } = Table;

interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  tags: string[];
}

const macbooks = [
  { id: "1", color: "red" },
  { id: "2", color: "red" },
  { id: "3", color: "blue" },
  { id: "4", color: "yellow" },
  { id: "5", color: "yellow" },
];



const CustomTable: React.FC = () => {
  const { data } = useQuery(["products"], productsApi.getAll);
  const [products, setProducts] = useState<any>([]);

  const sort = () => {};

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  console.log(products);

  const columns = [
    {
      title: "Desc",
      dataIndex: "description",
      key: "title",
    },
  ];
  

  return (
    <>
      <Table
        pagination={{ pageSize: 5 }}
        dataSource={products}
        columns={columns}
      />
    </>
  );
};

export default CustomTable;
