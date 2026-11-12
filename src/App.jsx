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
  return (
    <>
      <BackgroundEffect />
      <Header />
      <Home />
      <Projects />
      <TechStackSection />
      <About />
      <Footer />

      <LoadingScreen />
    </>
  );
}

export default App;
