import { StarOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button, Table } from "antd";
import axios from "axios";
import { NavLink } from "react-router";

const Product = () => {
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/products");
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

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
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (record: string) => <img width={100} src={record} alt="" />,
    },
    {
      title: "Rate",
      dataIndex: "rate",
      key: "rate",
      render: (record: { count: number; star: number }) => {
        const { count, star } = record;
        return (
          <div>
            <div>{count} Point</div>
            <div>
              {star} <StarOutlined />
            </div>
          </div>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <div>
          <Button type="primary">Edit</Button>
          <Button color="danger" variant="solid">
            Delete
          </Button>
        </div>
      ),
    },
  ];
  return (
    <>
      <Button type="primary"><NavLink to={"/admin/product/add"}>Add Product</NavLink></Button>
      <Table
        dataSource={products}
        columns={columns}
        loading={isLoading}
        rowKey={(record: { id: number }) => record.id}
      />
    </>
  );
};

export default Product;
