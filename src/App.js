import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Project from "./components/Project";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
