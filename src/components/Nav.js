import React from "react";
import { Link } from "react-router-dom";
import "./styles/nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
        <li>
          <Link to="projects">Portfolio</Link>
        </li>
      </ul>
    </nav>
  );
}
