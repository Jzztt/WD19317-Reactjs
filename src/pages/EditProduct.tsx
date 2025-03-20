import { useQuery } from "@tanstack/react-query";
import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router";

const EditProduct = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const getProduct = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/products/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const { data: product } = useQuery({
    queryKey: ["product", id],
    queryFn: getProduct,
  });
  useEffect(()=>{
    if(!product) return;
    form.setFieldsValue(product);
  })

  return (
    <>
      <div>CreateProduct</div>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Form
          form={form}
          labelCol={{ span: 4 }}
          layout="horizontal"
          style={{ width: 800 }}
          // onFinish={handleSubmit}
        >
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>
          <Form.Item name="price" label="Price">
            <Input />
          </Form.Item>
          <Form.Item name="category" label="Select Category">
            <Select placeholder="Select a option and change input text above">
              <Select.Option value="smartphone">SmartPhone</Select.Option>
              <Select.Option value="laptop">LapTop</Select.Option>
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

export default EditProduct;
