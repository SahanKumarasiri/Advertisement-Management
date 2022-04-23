import { useEffect, useState } from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Button,
  Form,
  Input,
  Select,
  Divider,
  notification,
} from "antd";
import {
  SendOutlined,
  CrownOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import {} from "antd";
import { Link, useParams } from "react-router-dom";
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

const EditAdvertisement = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [adName, setAdName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const date = new Date();
  const hrs = date.getHours();

  let greet;

  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs < 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs < 19) greet = "Good Evening";
  else greet = "Good Night";

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  const [form] = Form.useForm();

  const { id } = useParams();

  useEffect(() => {
    (async () =>
      await axios
        .get(`http://localhost:8070/advertise/get/${id}`)
        .then((res) => {
          form.setFieldsValue({
            adName: res.data.adName,
            contactNo: res.data.contactNo,
            email: res.data.email,
            description: res.data.description,
            title: res.data.title,
            priceRange: res.data.priceRange,
          });
          setAdName(res.data.adName);
          setContactNo(res.data.contactNo);
          setEmail(res.data.email);
          setDescription(res.data.description);
          setTitle(res.data.title);
          setPriceRange(res.data.priceRange);
        }))();
  }, []);

  const onReset = () => {
    form.resetFields();
  };

  const editHandler = async () => {
    try {
      await axios.put(`http://localhost:8070/advertise/update/${id}`, {
        adName,
        contactNo,
        email,
        description,
        title,
        priceRange,
      });
      notification.info({
        title: "Update Form",
        message: "Successfully Updated The Advertidement",
        placement: "top",
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Menu theme="dark" mode="inline" selectedKeys={"0"}>
              <Menu.Item key="0" icon={<SendOutlined />}>
                <Link to="/home">Advertising Management</Link>
              </Menu.Item>
            </Menu>
            <br />
            <br />
          </Sider>
          <Layout className="site-layout">
            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>{greet}</Breadcrumb.Item>
                <Breadcrumb.Item>Admin</Breadcrumb.Item>
              </Breadcrumb>
              <center>
                <Divider />

                <h1>Edit Advertisement</h1>
                <Divider />
              </center>
              <Form
                {...layout}
                form={form}
                name="control-hooks"
                onFinish={editHandler}
              >
                <Form.Item
                  name="adName"
                  label="Advertisemnet Name"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  // initialValue={data.adName}
                >
                  <Input onChange={(e) => setAdName(e.target.value)} />
                </Form.Item>
                <Form.Item
                  name="contactNo"
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
                  />
                </Form.Item>
                <Form.Item
                  name="title"
                  label="Title"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input onChange={(e) => setTitle(e.target.value)} />
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
                  <Input onChange={(e) => setDescription(e.target.value)} />
                </Form.Item>
                <Form.Item
                  name="priceRange"
                  label="Price Range"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input onChange={(e) => setPriceRange(e.target.value)} />
                </Form.Item>
                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                    Edit
                  </Button>
                  <Button htmlType="button" onClick={onReset}>
                    Cancel
                  </Button>
                </Form.Item>
              </Form>
            </Content>
            <Link to="/home">
              {" "}
              <Button>Back</Button>
            </Link>
            <Footer style={{ textAlign: "center" }}>
              Copyright © {date.getFullYear()} ABC Company
            </Footer>
          </Layout>
        </Layout>
      </div>
    </>
  );
};

export default EditAdvertisement;
