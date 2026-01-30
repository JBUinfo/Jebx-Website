import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/language-context";
import text_website from "../../../../assets/text-website.json";

const terminalLinesES = [
  { prompt: true, text: "whoami" },
  { prompt: false, text: "Javier Borbolla Ureña (Jebx)" },
  { prompt: true, text: "cat about.txt" },
  { prompt: false, text: "" }, // will use dynamic text
  { prompt: true, text: "ls skills/" },
  { prompt: false, text: "React/ TypeScript/ Node.js/ Go/ Python/ C#/ Docker/ Solidity/" },
  { prompt: true, text: "_" },
];

const terminalLinesEN = [
  { prompt: true, text: "whoami" },
  { prompt: false, text: "Javier Borbolla Ureña (Jebx)" },
  { prompt: true, text: "cat about.txt" },
  { prompt: false, text: "" },
  { prompt: true, text: "ls skills/" },
  { prompt: false, text: "React/ TypeScript/ Node.js/ Go/ Python/ C#/ Docker/ Solidity/" },
  { prompt: true, text: "_" },
];

const Particles = () => (
  <div className="particles">
    {Array.from({ length: 20 }).map((_, i) => (
      <div
        key={i}
        className="particle"
        style={{
          left: `${Math.random() * 100}%`,
          animationDuration: `${8 + Math.random() * 12}s`,
          animationDelay: `${Math.random() * 10}s`,
          width: `${1 + Math.random() * 2}px`,
          height: `${1 + Math.random() * 2}px`,
        }}
      />
    ))}
  </div>
);

const HomePage = () => {
  const { language } = useContext(LanguageContext);
  const [visibleLines, setVisibleLines] = useState(0);

  const terminalLines = language === "es" ? terminalLinesES : terminalLinesEN;
  const description = text_website.HOME_FIRST_DESCRIPTION[language!];

  // Fill in the dynamic description line
  const lines = terminalLines.map((line, i) =>
    i === 3 ? { ...line, text: description } : line
  );

  useEffect(() => {
    setVisibleLines(0);
    const timers: NodeJS.Timeout[] = [];
    lines.forEach((_, i) => {
      timers.push(
        setTimeout(() => setVisibleLines(i + 1), 400 + i * 600)
      );
    });
    return () => timers.forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return (
    <div className="min-h-screen grid-bg relative">
      <Particles />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Glitch Title */}
          <div className="fade-in mb-4">
            <h1
              className="glitch text-5xl md:text-7xl lg:text-8xl mb-2"
              data-text="JEBX"
            >
              JEBX
            </h1>
          </div>

          {/* Subtitle */}
          <div className="fade-in fade-in-d2 mb-12">
            <p
              className="text-sm md:text-base tracking-widest uppercase"
              style={{ color: "var(--neon-cyan)", textShadow: "0 0 10px rgba(0,212,255,0.3)" }}
            >
              Full Stack Developer & Cybersecurity Enthusiast
            </p>
          </div>

          {/* Terminal Window */}
          <div className="fade-in fade-in-d4 terminal-window max-w-2xl mx-auto text-left mb-12">
            <div className="terminal-header">
              <div className="terminal-dot" style={{ background: "#ff5f56" }} />
              <div className="terminal-dot" style={{ background: "#ffbd2e" }} />
              <div className="terminal-dot" style={{ background: "#27c93f" }} />
              <span className="text-xs ml-2" style={{ color: "var(--text-dim)" }}>
                jebx@portfolio:~
              </span>
            </div>
            <div className="terminal-body">
              {lines.slice(0, visibleLines).map((line, i) => (
                <div key={i} className="type-line" style={{ animationDelay: `${i * 0.1}s` }}>
                  {line.prompt ? (
                    <span>
                      <span style={{ color: "var(--neon-green)" }}>jebx</span>
                      <span style={{ color: "var(--text-dim)" }}>@</span>
                      <span style={{ color: "var(--neon-cyan)" }}>portfolio</span>
                      <span style={{ color: "var(--text-dim)" }}>:~$ </span>
                      <span style={{ color: "var(--text-bright)" }}>
                        {line.text === "_" ? "" : line.text}
                      </span>
                      {i === visibleLines - 1 && line.text === "_" && (
                        <span className="cursor-blink" />
                      )}
                    </span>
                  ) : (
                    <span style={{ color: "var(--text-mid)" }}>{line.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="fade-in fade-in-d6 flex gap-6 justify-center flex-wrap">
            <Link to="/design/design-02/tech" className="cyber-btn">
              <span>&gt; View Projects</span>
            </Link>
            <Link to="/design/design-02/me" className="cyber-btn cyber-btn-secondary">
              <span>&gt; About Me</span>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 fade-in fade-in-d8">
          <div className="cyber-scroll-indicator" />
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="cyber-section-header text-2xl md:text-3xl text-center mb-4">
            {text_website.HOME_SECOND_TITLE[language!][0]}{" "}
            <span className="neon-cyan">{text_website.HOME_SECOND_TITLE[language!][1]}</span>
          </h2>
          <p className="text-center mb-16 max-w-2xl mx-auto text-sm" style={{ color: "var(--text-dim)" }}>
            {text_website.HOME_SECOND_DESCRIPTION[language!][0]}{" "}
            {text_website.HOME_SECOND_DESCRIPTION[language!][1]}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "&#x276E;/&#x276F;",
                title: "Frontend",
                techs: "React, TypeScript, Tailwind, Next.js, Angular",
                color: "var(--neon-green)",
              },
              {
                icon: "&#x2699;",
                title: "Backend",
                techs: "Node.js, Express, Go, C#, MongoDB, PostgreSQL",
                color: "var(--neon-cyan)",
              },
              {
                icon: "&#x2622;",
                title: "Security",
                techs: "Malware Analysis, Network Forensics, CUDA, Nmap",
                color: "var(--neon-pink)",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="cyber-card p-8 corner-deco"
              >
                <div
                  className="text-3xl mb-4"
                  style={{ color: card.color, textShadow: `0 0 10px ${card.color}` }}
                  dangerouslySetInnerHTML={{ __html: card.icon }}
                />
                <h3
                  className="text-lg font-bold mb-3 uppercase tracking-wider"
                  style={{ color: card.color, fontFamily: "'Orbitron', sans-serif" }}
                >
                  {card.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-dim)" }}>
                  {card.techs}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects CTA */}
      <section className="py-24 px-6 relative" style={{ background: "rgba(0,0,0,0.3)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="cyber-section-header text-2xl md:text-3xl mb-4">
            {text_website.HOME_THIRD_TITLE[language!][0]}
          </h2>
          <p
            className="neon-pink text-xl md:text-2xl mb-4"
            style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700 }}
          >
            {text_website.HOME_THIRD_TITLE[language!][1]}
          </p>
          <p className="text-sm mb-12 max-w-xl mx-auto" style={{ color: "var(--text-dim)" }}>
            {text_website.HOME_THIRD_DESCRIPTION[language!][0]}
          </p>

          <Link to="/design/design-02/work" className="cyber-btn">
            <span>&gt; View Timeline</span>
          </Link>
        </div>
      </section>

      {/* Footer hex decoration */}
      <div className="py-8 text-center hex-deco">
        {"0x4A454258 // BUILT WITH REACT + TYPESCRIPT + TAILWIND"}
      </div>
    </div>
  );
};

export default HomePage;
