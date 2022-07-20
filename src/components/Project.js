import React from "react";

import dotify from "./img/dotify.png";
import expressNote from "./img/expressNote.png";
import ipGeolocator from "./img/IPGeolocator.png";
import portfolio from "./img/portfolio.png";
import weatherSite from "./img/weatherSite.png";
import workCalendar from "./img/workCalendar.png";

import "./styles/project.css";

const projects = [
  {
    name: "Dotify",
    liveURL: "https://lit-oasis-59669.herokuapp.com/",
    img: dotify,
    repoLink: "https://github.com/ctmbr/musicQuestionaire",
  },
  {
    name: "Express Note",
    liveURL: "https://shielded-castle-79855.herokuapp.com/",
    img: expressNote,
    repoLink: "https://github.com/ctmbr/expressNote",
  },
  {
    name: "Ip Geolocator",
    liveURL: "https://ctmbr.github.io/IPGeolocator",
    img: ipGeolocator,
    repoLink: "https://github.com/ctmbr/IPGeolocator",
  },
  {
    name: "Portfolio",
    liveURL: "https://ctmbr.github.io/charlesPortfolio",
    img: portfolio,
    repoLink: "https://github.com/ctmbr/charleePortfolio",
  },
  {
    name: "Weather Site",
    liveURL: "https://ctmbr.github.io/",
    img: weatherSite,
    repoLink: "https://github.com/ctmbr/weatherSite",
  },
  {
    name: "",
    liveURL: "",
    img: workCalendar,
    repoLink: "https://github.com/ctmbr/workCalendar",
  },
];

export default function Project() {
  return (
    <section className="blade">
      {projects.map((project) => (
        <section className="projects-container project-style">
          <div className="projectStyle">
            <h2>{project.name}</h2>
            <a href={project.liveURL}>
              <img alt="" src={project.img} />
            </a>
            <div>
              <a className="btn" href={project.repoLink}>
                repository
              </a>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
}
