import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function BackgroundEffect() {
  const circle = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      timeline
        .to(circle.current, {
          x: "-80vw",
          y: "80vh",
        })
        .to(circle.current, {
          x: "0vw",
        });
    }, circle);

    return () => ctx.revert();
  }, []);

  return <div ref={circle} className="blur-circle" />;
}

export default BackgroundEffect;
