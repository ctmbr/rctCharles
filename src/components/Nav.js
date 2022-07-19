import React from "react";
import "./styles/nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="about">About</a>
        </li>
        <li>
          <a href="contact">Contact</a>
        </li>
        <li>
          <a href="projects">Portfolio</a>
        </li>
      </ul>
    </nav>
  );
}
