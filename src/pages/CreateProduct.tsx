import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import { useNavigate } from "react-router";

export interface IProduct{
  id: number,
  name: string,
  price : number,
  category: string,
  image: string
}
const CreateProduct = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const queryClient = useQueryClient();
  const createProduct = async (payload : Omit<IProduct,"id">) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/products",
        payload
      );
      return data;
    } catch (error) {
        console.log(error);
    }
  };
  const mutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      navigate("/admin/product");
    },
  });
  const handleSubmit = (values: Omit<IProduct,"id">) => {
    mutation.mutate(values);
  };

  return (
    <>
      <div>CreateProduct</div>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Form
          form={form}
          labelCol={{ span: 4 }}
          layout="horizontal"
          style={{ width: 800 }}
          onFinish={handleSubmit}
        >
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>
          <Form.Item name="price" label="Price">
            <Input />
          </Form.Item>
          <Form.Item name="category" label="Select Category">
            <Select placeholder="Select a option and change input text above">
              <Select.Option value="SmartPhone">SmartPhone</Select.Option>
              <Select.Option value="LapTop">LapTop</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="image" label="Image">
            <Input />
          </Form.Item>
          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default CreateProduct;
