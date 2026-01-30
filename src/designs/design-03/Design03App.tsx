import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef, useState, useMemo } from "react";
import "./design-03.css";

import { LanguageContext } from "./context/language-context";
import Navbar from "./components/Navbar";
import HomePage from "./pages/home/HomePage";
import TechPage from "./pages/tech/TechPage";
import WorkPage from "./pages/work/WorkPage";
import MePage from "./pages/me/MePage";

const Stars = () => {
  const stars = useMemo(
    () =>
      Array.from({ length: 80 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 60,
        size: 1 + Math.random() * 2,
        duration: 2 + Math.random() * 4,
        delay: Math.random() * 4,
      })),
    []
  );

  return (
    <div className="stars">
      {stars.map((s) => (
        <div
          key={s.id}
          className="star"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

const Sunset = () => {
  const lines = [
    { top: "52%", height: "4px" },
    { top: "58%", height: "6px" },
    { top: "63%", height: "8px" },
    { top: "68%", height: "10px" },
    { top: "73%", height: "14px" },
    { top: "78%", height: "18px" },
    { top: "84%", height: "22px" },
  ];

  return (
    <div className="sunset-container">
      <div className="sunset-glow" />
      <div className="sunset">
        {lines.map((l, i) => (
          <div
            key={i}
            className="sunset-line"
            style={{ top: l.top, height: l.height }}
          />
        ))}
      </div>
    </div>
  );
};

const Design03App: React.FC = () => {
  const [language, setLanguage] = useState<"es" | "en">("en");
  const scrollRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    navigator.language.includes("es") ? setLanguage("es") : setLanguage("en");
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleLanguage = () => {
    setLanguage("es" === language ? "en" : "es");
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <div className="design-03 min-h-screen overflow-x-hidden">
        <Stars />
        <Sunset />
        <div className="retro-grid-container">
          <div className="retro-grid" />
          <div className="retro-grid-fade" />
        </div>

        <Navbar />
        <div ref={scrollRef} className="h-screen overflow-y-auto overflow-x-hidden relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="tech" element={<TechPage />} />
            <Route path="work" element={<WorkPage />} />
            <Route path="me" element={<MePage />} />
          </Routes>
        </div>
      </div>
    </LanguageContext.Provider>
  );
};

export default Design03App;
