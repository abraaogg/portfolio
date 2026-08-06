import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function BackgroundEffect() {
  const circle = useRef();

useLayoutEffect(() => {
  const tween = gsap.timeline({
    scrollTrigger: {
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    },
  });

  tween
    .to(circle.current, {
      x: "-80vw",
      y: "80vh",
      ease: "none",
    })
    .to(circle.current, {
      x: "0vw",
      ease: "none",
    });

  return () => {
    tween.kill();
    ScrollTrigger.getAll().forEach((st) => st.kill());
  };
}, []);

  return <div ref={circle} className="blur-circle" />;
}

export default BackgroundEffect;
