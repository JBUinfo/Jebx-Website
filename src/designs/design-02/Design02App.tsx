import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./design-02.css";

import { LanguageContext } from "./context/language-context";
import MatrixRain from "./components/MatrixRain";
import Navbar from "./components/Navbar";
import HomePage from "./pages/home/HomePage";
import TechPage from "./pages/tech/TechPage";
import WorkPage from "./pages/work/WorkPage";
import MePage from "./pages/me/MePage";

const Design02App: React.FC = () => {
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
      <div className="design-02 min-h-screen overflow-x-hidden">
        <MatrixRain />
        <div className="scanline-overlay" />
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

export default Design02App;
