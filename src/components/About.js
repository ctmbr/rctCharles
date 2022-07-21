import React from "react";
import "./styles/about.css";
import "./styles/btn.css";
import Charles from "./img/Charles.jpg";

export default function AboutMe() {
  return (
    <section className="hero">
      <div className="first">
        <img src={Charles} className="img" alt="Charles Portrait" />
      </div>
      <div className="content">
        <span className="title">Freelance Web Developer</span>
        <h1>
          Hello, I’m <span>Charles</span>
        </h1>
        <p>A North America-based developer. This is my Portfolio.</p>
      </div>
    </section>
  );
}
