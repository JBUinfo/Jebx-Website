import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { LanguageContext } from "../context/language-context";
import text_website from "../../../assets/text-website.json";

const Navbar = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Home", url: "/design/design-02" },
    { label: text_website.NAVBAR[language!][0], url: "/design/design-02/tech" },
    { label: text_website.NAVBAR[language!][1], url: "/design/design-02/work" },
    { label: text_website.NAVBAR[language!][2], url: "/design/design-02/me" },
  ];

  return (
    <nav className="cyber-nav fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/design/design-02" className="flex items-center gap-3">
          <div className="status-online" />
          <span
            className="text-xl font-bold neon-green"
            style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: "3px" }}
          >
            JEBX
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.url}
              className="cyber-nav-link"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={toggleLanguage}
            className="px-3 py-1.5 text-xs font-bold border border-green-500/30 text-green-400 hover:bg-green-500/10 hover:border-green-500/50 transition-all uppercase tracking-widest"
            style={{ clipPath: "polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)" }}
          >
            {language === "es" ? "EN" : "ES"}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className={`hamburger-line ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
          <div className={`hamburger-line ${mobileOpen ? "opacity-0" : ""}`} />
          <div className={`hamburger-line ${mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-green-500/10 bg-black/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((link, i) => (
              <Link
                key={i}
                to={link.url}
                className="cyber-nav-link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                toggleLanguage!();
                setMobileOpen(false);
              }}
              className="px-3 py-1.5 text-xs font-bold border border-green-500/30 text-green-400 hover:bg-green-500/10 transition-all uppercase tracking-widest w-fit"
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
