import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Project from "./components/Project";
import "./components/styles/app.css";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="flex-grow-child">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
