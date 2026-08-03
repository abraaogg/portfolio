import "../styles/LoadingScreen.css";

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-screen-logo">
        A<span className="dot"></span>G
      </div>
      <div className="loading-bar">
        <span></span>
      </div>
    </div>
  );
}

export default LoadingScreen;
