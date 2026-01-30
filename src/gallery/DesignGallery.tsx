import { useNavigate } from "react-router-dom";
import "./DesignGallery.css";

interface Design {
  id: string;
  number: string;
  title: string;
  description: string;
  screenshot: string;
  route: string;
  color: string;
}

const designs: Design[] = [
  {
    id: "design-01",
    number: "01",
    title: "RETRO TECH",
    description: "Orange & cyan aesthetic. Image carousel hero, animated word carousel, project timeline. Monospace typography with retro vibes.",
    screenshot: "/screenshots/design-01.png",
    route: "/design/design-01",
    color: "#ff8c00",
  },
  {
    id: "design-02",
    number: "02",
    title: "CYBER TERMINAL",
    description: "Matrix rain, glitch effects, neon glow. Terminal-style interface with hacker aesthetics. Scanlines and animated borders.",
    screenshot: "/screenshots/design-02.png",
    route: "/design/design-02",
    color: "#00ff41",
  },
  {
    id: "design-03",
    number: "03",
    title: "SYNTHWAVE",
    description: "80s retrowave sunset, perspective grid, chrome text. Neon pink & cyan palette with VHS aesthetics and a nostalgic vibe.",
    screenshot: "/screenshots/design-03.png",
    route: "/design/design-03",
    color: "#ff2975",
  },
];

const DesignGallery: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="gallery-root">
      <div className="gallery-scanlines" />

      <header className="gallery-header">
        <div className="gallery-header-deco">{"// 0x4A454258 — PORTFOLIO SYSTEM v3.0"}</div>
        <h1 className="gallery-title">Select Design</h1>
        <p className="gallery-subtitle">{">"} Choose your experience</p>
      </header>

      <div className="gallery-grid">
        {designs.map((design) => (
          <div
            key={design.id}
            className="design-card"
            style={{ "--card-color": design.color } as React.CSSProperties}
            onClick={() => navigate(design.route)}
          >
            <div className="card-header">
              <span className="card-number">DESIGN {design.number}</span>
              <span className="card-status">
                <span className="card-status-dot" />
                READY
              </span>
            </div>

            <div className="card-image-wrap">
              <img
                src={design.screenshot}
                alt={design.title}
                className="card-image"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%23111'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2300ff41' font-size='20' font-family='monospace'%3E[ NO PREVIEW ]%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>

            <div className="card-info">
              <h2 className="card-title">{design.title}</h2>
              <p className="card-description">{design.description}</p>
              <span className="card-enter">
                ENTER <span className="card-enter-arrow">{"->"}</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      <footer className="gallery-footer">
        {"// JEBX PORTFOLIO — REACT + TYPESCRIPT + TAILWIND"}
      </footer>
    </div>
  );
};

export default DesignGallery;
