import { BrowserRouter, Routes, Route } from "react-router-dom";
import DesignGallery from "./gallery/DesignGallery";
import Design01App from "./designs/design-01/Design01App";
import Design02App from "./designs/design-02/Design02App";
import Design03App from "./designs/design-03/Design03App";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DesignGallery />} />
        <Route path="/design/design-01/*" element={<Design01App />} />
        <Route path="/design/design-02/*" element={<Design02App />} />
        <Route path="/design/design-03/*" element={<Design03App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
