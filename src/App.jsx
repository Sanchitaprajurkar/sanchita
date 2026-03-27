import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/achievements/Work";
import Achievements from "./pages/achievements/Achievements";
import Journey from "./pages/Journey";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/story" element={<Journey />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
