import React, { useState, useEffect } from "react";
import { Button, Carousel, Spin } from "antd";
import { Link } from "react-router-dom";

const contentStyle = {
  height: "470px",
  width: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const CarouselView = () => {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoader(!loader);
    }, 5000);
  }, []);
  return (
    <>
      <center>
        <div style={{ display: "flex", float: "right" , marginTop:"20px"}}>
          <div>
            <Button>Login</Button>
          </div>
          <div>
            <Button>Register</Button>
          </div>
        </div>
        <h1 style={{ fontSize: "50px" }}>Welcome to Advertising</h1>
        <Link to="/home">
          <Button>Get Started</Button>
        </Link>
        <br></br>
        <br></br>
        <Carousel autoplay style={{ width: "50%" }}>
          <div>
            <img src={"https://i.ibb.co/k88k2dj/1.jpg"} style={contentStyle} />
          </div>
          <div>
            <img src={"https://i.ibb.co/KqX1tN2/2.jpg"} style={contentStyle} />
          </div>
          <div>
            <img src={"https://i.ibb.co/rGM8cf7/3.jpg"} style={contentStyle} />
          </div>
          <div>
            <img src={"https://i.ibb.co/K2RqkCj/4.jpg"} style={contentStyle} />
          </div>
        </Carousel>
      </center>
    </>
  );
};

export default CarouselView;
