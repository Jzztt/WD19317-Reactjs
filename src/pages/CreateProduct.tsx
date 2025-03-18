import { Button, Form, Input, Select } from "antd";

const CreateProduct = () => {
    const [form] = Form.useForm();
  return (
    <>
      <div>CreateProduct</div>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Form form={form} labelCol={{ span: 4 }} layout="horizontal" style={{ width: 800 }} onFinish={(values)=> console.log(values)}
        >
          <Form.Item  name="name"  label="Name">
            <Input  />
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
