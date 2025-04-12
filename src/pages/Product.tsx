import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, message, Popconfirm, Table } from "antd";
import axios from "axios";
import { NavLink } from "react-router";
import { IProduct } from "./CreateProduct";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import instanceAxios from "../utils/instanceAxios";

const Product = () => {
  const queryClient = useQueryClient();
  const [messageApi, contextHolder] = message.useMessage();
  const { theme } = useContext(ThemeContext);

  const deleteProduct = async (id: number) => {
    try {
      const { data } = await instanceAxios.delete(
        `/products/${id}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const mutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      messageApi.success("Delete success");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
  const fetchProducts = async () => {
    try {
      const { data } = await instanceAxios.get("/products");
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
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
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
      title: "Action",
      key: "action",
      render: (record: IProduct) => (
        <div>
          <Button type="primary">
            <NavLink to={`/admin/product/edit/${record.id}`}>Edit</NavLink>
          </Button>
          <Popconfirm
            title="Are you sure to delete this product?"
            onConfirm={() => mutation.mutate(record.id)}
          >
            <Button color="danger" variant="solid">
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];
  return (
    <>
      {theme}
      {contextHolder}
      <Button type="primary">
        <NavLink to={"/admin/product/add"}>Add Product</NavLink>
      </Button>
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
