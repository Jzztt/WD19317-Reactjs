import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, message, Popconfirm, Table } from "antd";
import axios from "axios";
import { NavLink } from "react-router";
import { IProduct } from "./CreateProduct";

const Product = () => {
  const queryClient = useQueryClient();
  const deleteProduct = async (id: number) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3000/products/${id}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };
   const mutation = useMutation({
    mutationFn:deleteProduct,
    onSuccess:() => {
      message.success("Delete success");
      queryClient.invalidateQueries({ queryKey: ["products"]})
    }
   })
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
          <Button type="primary">Edit</Button>
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
