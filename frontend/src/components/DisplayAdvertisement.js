import { Button, notification, Table } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DisplayAdvertisement = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () =>
      await axios
        .get("http://localhost:8070/advertise/")
        .then((res) => setData(res.data)))();
  }, []);

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:8070/advertise/delete/${id}`);
      notification.info({
        title: "Delete Form",
        message: "Successfully Delete The Advertidement",
        placement: "top",
      });
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  };

  const columns = [
    {
      title: "Advertisement Name",
      dataIndex: "adName",
    },
    {
      title: "Contact Number",
      dataIndex: "contactNo",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Price Range",
      dataIndex: "priceRange",
    },
    {
      title: "Action",
      render: (record) => (
        <>
          <Link to={`/edit/${record._id}`}>
            <button style={{ background: "green", color: "white" }}>
              Edit
            </button>
          </Link>
          <button
            style={{ background: "red", color: "white" }}
            onClick={() => deleteHandler(record._id)}
          >
            Delete
          </button>
        </>
      ),
    },
  ];

  return (
    <>
      <Link to="/report">
        <Button>Generate Report</Button>
      </Link>
      <br />
      <br />
      <Table columns={columns} dataSource={data} />
    </>
  );
};
export default DisplayAdvertisement;
