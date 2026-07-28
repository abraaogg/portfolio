import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Footer from "./components/Footer";
import BackgroundEffect from "./components/BackgroundEffect";

function App() {
  return (
    <>
    <BackgroundEffect/>
      <Header />
      <Home />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </>
  );
}

export default App;
