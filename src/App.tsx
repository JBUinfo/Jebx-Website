import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { LanguageContext } from "./context/language-context";

import Header, { HeaderColor } from "./components/header/header.component";
import HomePage from "./pages/home/home.component";
import TechPage from "./pages/tech/tech.component";
import WorkPage from "./pages/work/work.component";
import MePage from "./pages/me/me.component";
import { HeaderColorContext } from "./context/header-color-context";

const App: React.FC = () => {
  const [language, setLanguage] = useState<"es" | "en">("en");
  const [headerLineColor, setHeaderLineColor] = useState<HeaderColor>(
    HeaderColor.ORANGE
  );
  useEffect(() => {
    navigator.language.includes("es") ? setLanguage("es") : setLanguage("en");
  }, []);
  const toggleLanguage = () => {
    setLanguage("es" === language ? "en" : "es");
  };
  const toggleColor = (color: HeaderColor) => {
    setHeaderLineColor(color);
  };
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <HeaderColorContext.Provider value={{ headerLineColor, toggleColor }}>
        <div>
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
      </HeaderColorContext.Provider>
    </LanguageContext.Provider>
  );
};

export default App;
