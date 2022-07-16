import React from "react";
import ipGeolocator from "./img/IPGeolocator.png";
import "./styles/project.css";

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
        <div className="projectStyle">
          <h2>{project.name}</h2>
          <a href={project.liveURL}>
            <img alt="" src={project.img} />
          </a>
          <div>
            <a className="btn" href={project.repositoryLink}>
              repository
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
