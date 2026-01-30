import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/language-context";
import text_website from "../../../../assets/text-website.json";

const HomePage = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="min-h-screen relative">
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-16 pb-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* VHS decoration */}
          <div className="sw-fade-in vhs-deco mb-6">
            {"▶ REC  ●  00:00:01"}
          </div>

          {/* Chrome title */}
          <div className="sw-fade-in sw-fade-d1 mb-4">
            <h1 className="chrome-text text-5xl md:text-7xl lg:text-8xl">
              JEBX
            </h1>
          </div>

          {/* Subtitle */}
          <div className="sw-fade-in sw-fade-d2 mb-6">
            <p className="sw-neon-cyan text-sm md:text-base tracking-widest uppercase">
              Full Stack Developer & Tech Enthusiast
            </p>
          </div>

          {/* Description */}
          <div className="sw-fade-in sw-fade-d3 mb-12">
            <p className="text-sm max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--sw-text-dim)" }}>
              {text_website.HOME_FIRST_DESCRIPTION[language!]}
            </p>
          </div>

          {/* Buttons */}
          <div className="sw-fade-in sw-fade-d4 flex gap-5 justify-center flex-wrap">
            <Link to="/design/design-03/tech" className="sw-btn">
              View Projects
            </Link>
            <Link to="/design/design-03/me" className="sw-btn sw-btn-outline">
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-24 px-6 relative" style={{ background: "rgba(13, 2, 33, 0.7)" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="sw-section-header text-2xl md:text-3xl text-center mb-4 sw-neon-pink">
            {text_website.HOME_SECOND_TITLE[language!][0]}{" "}
            <span className="sw-neon-cyan">{text_website.HOME_SECOND_TITLE[language!][1]}</span>
          </h2>
          <p className="text-center mb-16 max-w-2xl mx-auto text-sm" style={{ color: "var(--sw-text-dim)" }}>
            {text_website.HOME_SECOND_DESCRIPTION[language!][0]}{" "}
            {text_website.HOME_SECOND_DESCRIPTION[language!][1]}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "⟨/⟩", title: "Frontend", techs: "React, TypeScript, Tailwind, Angular, WPF", color: "var(--sw-pink)" },
              { icon: "⚡", title: "Backend", techs: "Node.js, Go, C#, Express, MongoDB, NestJS", color: "var(--sw-cyan)" },
              { icon: "🛡️", title: "Security", techs: "Malware Analysis, Forensics, CUDA, Nmap", color: "var(--sw-yellow)" },
            ].map((card, i) => (
              <div key={i} className="sw-card p-8 rounded-lg">
                <div className="text-3xl mb-4" style={{ color: card.color, textShadow: `0 0 12px ${card.color}` }}>
                  {card.icon}
                </div>
                <h3
                  className="text-lg font-bold mb-3 uppercase tracking-wider"
                  style={{ fontFamily: "'Orbitron', sans-serif", color: card.color }}
                >
                  {card.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--sw-text-dim)" }}>{card.techs}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects CTA */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="sw-section-header text-2xl md:text-3xl mb-4 sw-neon-pink">
            {text_website.HOME_THIRD_TITLE[language!][0]}
          </h2>
          <p
            className="sw-neon-yellow text-xl md:text-2xl mb-4"
            style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700 }}
          >
            {text_website.HOME_THIRD_TITLE[language!][1]}
          </p>
          <p className="text-sm mb-12 max-w-xl mx-auto" style={{ color: "var(--sw-text-dim)" }}>
            {text_website.HOME_THIRD_DESCRIPTION[language!][0]}
          </p>
          <Link to="/design/design-03/work" className="sw-btn">
            View Timeline
          </Link>
        </div>
      </section>

      <div className="py-8 text-center vhs-deco">
        {"◆ JEBX PORTFOLIO — SYNTHWAVE EDITION ◆"}
      </div>
    </div>
  );
};

export default HomePage;
