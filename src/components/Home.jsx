import "../styles/home.css";
import { FaGithub, FaFileAlt } from "react-icons/fa";

function Home() {
  return (
    <div className="home" id="home">
      <div className="home-content">
        <h1>ABRAÃO GRIGÓRIO</h1>
        <p>
          Transforming ideas into modern, responsive, and interactive web
          experiences.
        </p>
        <div className="button-group">
          <a href="https://github.com/abraaogg" target="_blank">
            <FaGithub />
          </a>
          <a
            href={`${import.meta.env.BASE_URL}resume.html`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFileAlt />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
