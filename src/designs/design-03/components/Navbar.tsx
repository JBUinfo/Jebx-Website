import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { LanguageContext } from "../context/language-context";
import text_website from "../../../assets/text-website.json";

const Navbar = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Home", url: "/design/design-03" },
    { label: text_website.NAVBAR[language!][0], url: "/design/design-03/tech" },
    { label: text_website.NAVBAR[language!][1], url: "/design/design-03/work" },
    { label: text_website.NAVBAR[language!][2], url: "/design/design-03/me" },
  ];

  return (
    <nav className="sw-nav fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/design/design-03"
          className="text-xl font-bold sw-neon-pink"
          style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: "3px" }}
        >
          JEBX
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.url}
              className="sw-nav-link"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={toggleLanguage}
            className="px-3 py-1.5 text-xs font-bold border rounded"
            style={{
              borderColor: "rgba(0, 255, 240, 0.3)",
              color: "var(--sw-cyan)",
            }}
          >
            {language === "es" ? "EN" : "ES"}
          </button>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className={`sw-hamburger-line ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
          <div className={`sw-hamburger-line ${mobileOpen ? "opacity-0" : ""}`} />
          <div className={`sw-hamburger-line ${mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t" style={{ borderColor: "rgba(255,41,117,0.15)", background: "rgba(13,2,33,0.95)" }}>
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((link, i) => (
              <Link key={i} to={link.url} className="sw-nav-link" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => { toggleLanguage!(); setMobileOpen(false); }}
              className="px-3 py-1.5 text-xs font-bold border rounded w-fit"
              style={{ borderColor: "rgba(0, 255, 240, 0.3)", color: "var(--sw-cyan)" }}
            >
              {language === "es" ? "EN" : "ES"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
