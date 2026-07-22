import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(0);

  return <>
  <Header/>
  <Home/>
  <Projects/>
  <Skills/>
  <About/>
  </>;
}

export default App;
