import { useState, useEffect } from "react";
import "../styles/loadingScreen.css";

function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const loadEverything = async () => {
      const startTime = Date.now();
      const minimumTime = 2000;

      // Wait for document
      if (document.readyState !== "complete") {
        await new Promise((resolve) => {
          window.addEventListener("load", resolve, { once: true });
        });
      }

      // Wait for images
      const images = Array.from(document.images);

      await Promise.all(
        images.map(async (img) => {
          img.loading = "eager";

          try {
            await img.decode();
          } catch {
            // Ignore failed images
          }
        }),
      );

      // Wait for fonts
      await document.fonts.ready;

      // Minimum loading time
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(minimumTime - elapsed, 0);

      await new Promise((resolve) => setTimeout(resolve, remaining));

      if (!cancelled) {
        setLoading(false);
      }
    };

    loadEverything();

    return () => {
      cancelled = true;
    };
  }, []);

  if (!loading) return null;

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
