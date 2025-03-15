import { Breadcrumb, Button, Table } from "antd";
import React from "react";

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      cost: 50,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      cost: 100,
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <div>
          <Button type="primary">Edit</Button>
          <Button color="danger" variant="solid">Delete</Button>
        </div>
      ),
    }
  ];
  return (
    <>
      <Table dataSource={products} columns={columns} />
    </>
  );
};

export default Product;
