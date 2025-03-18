import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import { redirect } from "react-router";

const CreateProduct = () => {
  const [form] = Form.useForm();
  const queryClient = useQueryClient();
  const createProduct = async (payload) => {
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
      redirect("/admin/product");
    },
  });
  const handleSubmit = (values) => {
    const payload = {
      name: values.name,
      price : values.price,
      rate: {
        count: values.ratePoint,
        star: values.rateStar
      },
      category: values.category,
      image: values.image
    }
    mutation.mutate(payload);
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
          <Form.Item name="ratePoint" label="Rate Point">
            <Input />
          </Form.Item>
          <Form.Item name="rateStar" label="Rate Star">
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
