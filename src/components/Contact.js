import React from "react";
import technicalResume from "./pdf/technicalResume.pdf";
import "./styles/btn.css";

export default function Contact() {
  return (
    <nav>
      <a className="btn" href="mailto:ctmbr@protonmail.com">
        Email
      </a>
      <a className="btn" href="https://github.com/ctmbr">
        Github
      </a>
      <a className="btn" href={technicalResume}>
        Resume
      </a>
      <a
        className="btn"
        href="https://www.linkedin.com/in/charles-schneider-ctmbr/"
      >
        LinkedIn
      </a>
    </nav>
  );
}
