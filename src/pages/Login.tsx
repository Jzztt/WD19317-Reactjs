import { useMutation } from "@tanstack/react-query";
import { Button, Card, Form, Input } from "antd";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";

interface ILoginPayload {
  email: string;
  password: string;
}
const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const login = async (payload: ILoginPayload) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/signin",
        payload
      );
      return data.accessToken;
    } catch (error) {
      console.log(error);
    }
  };
  const mutationLogin = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem("token", data);
      alert("Login success");
      navigate("/admin/product");
    },
  });

  const handleLogin = (values: ILoginPayload) => {
    mutationLogin.mutate(values);
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
          <h1 style={{ textAlign: "center" }}> Login Form</h1>
          <Form form={form} onFinish={handleLogin} layout="vertical">
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

export default Login;
