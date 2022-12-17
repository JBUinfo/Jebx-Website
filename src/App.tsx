import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { LanguageContext } from "./language-context";
import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/home/home.component";
import TechPage from "./pages/tech/tech.component";
import WorkPage from "./pages/work/work.component";
import MePage from "./pages/me/me.component";

const App: React.FC = () => {
  const [language, setLanguage] = useState<"es" | "en">("en");
  useEffect(() => {
    navigator.language.includes("es") ? setLanguage("es") : setLanguage("en");
  }, []);
  const toggleLanguage = () => {
    setLanguage("es" === language ? "en" : "es");
  };
  return (
    <LanguageContext.Provider
      value={{ language: language, toggleLanguage: toggleLanguage }}
    >
      <div className="big-box-container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/tech" element={<TechPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/me" element={<MePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
