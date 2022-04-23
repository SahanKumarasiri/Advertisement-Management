import { useState } from "react";
import {
  Layout,
  Button,
  Form,
  Input,
  Select,
  Divider,
  notification,
} from "antd";
import "antd/dist/antd.css";
import {} from "antd";
import axios from "axios";
const { Header, Content, Footer, Sider } = Layout;

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const CreateAdvertisement = () => {
  const [collapsed, setCollapsed] = useState(false);

  const date = new Date();
  const hrs = date.getHours();

  let greet;

  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs < 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs < 19) greet = "Good Evening";
  else greet = "Good Night";

  const [adName, setAdName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const createHandler = async () => {
    try {
      await axios.post("http://localhost:8070/advertise/create", {
        adName,
        contactNo,
        email,
        description,
        title,
        priceRange,
      });
      notification.info({
        title: "Create Form",
        message: "Successfully Create The Advertidement",
        placement: "top",
      });
      form.resetFields();
    } catch (error) {
      alert(error);
    }
  };

  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <div>
        <center>
          <Divider />
          <h1>Create Advertisement</h1>
          <Divider />
        </center>
        <Form
          {...layout}
          form={form}
          name="control-hooks"
          onFinish={createHandler}
        >
          <Form.Item
            name="name"
            label="Advertisemnet Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              onChange={(e) => setAdName(e.target.value)}
              placeholder="Enter Adverisement Name"
            />
          </Form.Item>
          <Form.Item
            name="phone number"
            label="Contact Number"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              type={"number"}
              onChange={(e) => setContactNo(e.target.value)}
              placeholder="Enter Contact Number"
            />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
            />
          </Form.Item>
          <Form.Item
            name="4"
            label="Title"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Title"
            />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Description"
            />
          </Form.Item>
          <Form.Item
            name="price range"
            label="Price Range"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              onChange={(e) => setPriceRange(e.target.value)}
              placeholder="Enter Price Range"
            />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Create
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default CreateAdvertisement;
