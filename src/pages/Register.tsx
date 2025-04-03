import { useMutation } from "@tanstack/react-query";
import { Button, Card, Form, Input } from "antd";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";

interface IRegisterPayload {
    username: string,
    email: string,
    password: string
}
const Register = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const register = async (payload: IRegisterPayload) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/register",
        payload
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const mutationRegister = useMutation({
    mutationFn: register,
    onSuccess: () => {
      alert("Register success");
      navigate('/login');
    },
  });

  const handleRegister = (values: IRegisterPayload) => {
    mutationRegister.mutate(values);
  };
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card variant="outlined" style={{ width: 400 }}>
          <h1 style={{ textAlign: "center" }}> Register Form</h1>
          <Form form={form} onFinish={handleRegister} layout="vertical">
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input type="password" />
            </Form.Item>
            <Form.Item style={{ textAlign: "end" }}>
              <Button htmlType="submit" type="primary">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default Register;
