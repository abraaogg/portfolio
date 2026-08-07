import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import BackgroundEffect from "./components/BackgroundEffect";
import LoadingScreen from "./components/LoadingScreen";
import TechStackSection from "./components/TechStackSection";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const minimumTime = 2000; // 2 seconds
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(minimumTime - elapsed, 0);

      setTimeout(() => {
        setLoading(false);
      }, remaining);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
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
      <TechStackSection />
      <About />
      <Footer />
    </>
  );
}

export default App;
