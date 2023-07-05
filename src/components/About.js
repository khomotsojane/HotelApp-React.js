import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Video from "../media/video.mp4";
import "../App.css";

const About = () => {
  return (
    <div>
      <h1
        style={{ color: "#AA336A", textAlign: "center", marginBottom: "100px" }}
      >
        About our hotel
      </h1>
      <video
        autoPlay
        loop
        width="100%"
        height="500px"
        style={{ alignContent: "center" }}
      >
        <source src={Video} type="video/mp4"></source>
      </video>
    </div>
  );
};

export default About;
