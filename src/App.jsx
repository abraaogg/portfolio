import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Footer from "./components/Footer";
import BackgroundEffect from "./components/BackgroundEffect";
import LoadingScreen from "./components/LoadingScreen";
import TechStackSection from "./components/TechStackSection";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <>
      <BackgroundEffect />
      <Header />
      <Home />
      <Projects />
        <TechStackSection/>
   
      <About />
      <Footer />
    </>
  );
}

export default App;
