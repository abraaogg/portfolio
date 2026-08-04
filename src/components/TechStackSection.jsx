import "../styles/techStackSection.css";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const techStack = [
  {
    name: "React",
    color: "#61DAFB",
    icon: (
      <svg viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="2.2" {...stroke} />
        <ellipse cx="16" cy="16" rx="12" ry="4.6" {...stroke} />
        <ellipse
          cx="16"
          cy="16"
          rx="12"
          ry="4.6"
          {...stroke}
          transform="rotate(60 16 16)"
        />
        <ellipse
          cx="16"
          cy="16"
          rx="12"
          ry="4.6"
          {...stroke}
          transform="rotate(120 16 16)"
        />
      </svg>
    ),
  },
  {
    name: "Next.js",
    color: "#fff",
    icon: (
      <svg viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="12" {...stroke} />
        <path d="M11.5 21V11l9.5 12.2M20.5 11v8" {...stroke} />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    icon: (
      <svg viewBox="0 0 32 32">
        <path d="M16 3.4 27 9.7v12.6L16 28.6 5 22.3V9.7z" {...stroke} />
        <path
          d="M14 12v6.4a2 2 0 0 1-3.6 1.2M22 13.2a2.4 2.4 0 0 0-3.9.6c-.5 1.6 3.9 1.6 3.9 3.6a2.4 2.4 0 0 1-3.9 1.4"
          {...stroke}
        />
      </svg>
    ),
  },
  {
    name: "GSAP",
    color: "#88CE02",
    icon: (
      <svg viewBox="0 0 32 32">
        <path d="M25 10.5A8 8 0 1 0 25 21" {...stroke} />
        <path d="M18 15.8h7v5" {...stroke} />
      </svg>
    ),
  },
  {
    name: "CSS3",
    color: "#1572B6",
    icon: (
      <svg viewBox="0 0 32 32">
        <path d="M6 4h20l-1.8 20.2L16 28l-8.2-3.8z" {...stroke} />
        <path
          d="M21.5 10h-9l.4 4h8.2l-.6 6-4.5 1.5-4.5-1.5-.2-2.4"
          {...stroke}
        />
      </svg>
    ),
  },
  {
    name: "SQL",
    color: "#336791",
    icon: (
      <svg viewBox="0 0 32 32">
        <ellipse cx="16" cy="8" rx="9.5" ry="3.8" {...stroke} />
        <path
          d="M6.5 8v16c0 2.1 4.3 3.8 9.5 3.8s9.5-1.7 9.5-3.8V8"
          {...stroke}
        />
        <path
          d="M6.5 16c0 2.1 4.3 3.8 9.5 3.8s9.5-1.7 9.5-3.8"
          {...stroke}
        />
      </svg>
    ),
  },
];

export default function TechStackSection() {
  return (
    <section className="tech-stack" id="tech-stack">
      <div className="tech-stack__glow" />

      <div className="tech-stack__inner">
        <div className="tech-stack__head">
          <h2 className="tech-stack__title">Tech Stack</h2>
          <span className="tech-stack__rule" />
        </div>

        <ul className="tech-stack__grid">
          {techStack.map((tech) => (
            <li className="tech-card" key={tech.name}>
              <span
                className="tech-card__icon"
                style={{ color: tech.color }}
              >
                {tech.icon}
              </span>

              <span className="tech-card__name">
                {tech.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}