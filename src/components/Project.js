import React from "react";
import ipGeolocator from "./img/IPGeolocator.png";

const btn = {
  color: "#fff",
  fontSize: "16px",
  textTransform: "uppercase",
  letterSpacing: "2px",
  padding: "16px 40px",
  borderRadius: "500px",
  display: "inline-block",
  fontWeight: "500",
  transition: "all 0.4s ease-in-out",
  backgroundSize: "152% 100%",
  background: "#6e47fd",
  border: "2px solid #6e47fd",
  justifyContent: "space-around",
  btnHover: {
    background: "black",
    borderColor: "#6e7fd",
    color: "#6e47fd",
  },
};

const projectStyle = {
  backgroundColor: "#2d1e64",
  padding: "20px 20px 20px",
  border: "2px dashed lightblue",
  borderRadius: "30px",
  display: "flex",
  flexDirection: "column",
};
const projects = [
  {
    name: "Ip Geolocator",
    liveURL: "https://ctmbr.github.io/IPGeolocator",
    img: ipGeolocator,
    repositoryLink: "https://github.com/ctmbr/IPGeolocator",
  },
];

export default function Project() {
  return (
    <>
      {projects.map((project) => (
        <div style={projectStyle}>
          <h2>{project.name}</h2>
          <a href={project.liveURL}>
            <img alt="" src={project.img} />
          </a>
          <div>
            <a style={btn} href={project.repositoryLink}>
              repository
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
