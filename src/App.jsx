import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Work from "./pages/achievements/Work";
import Achievements from "./pages/achievements/Achievements";
import Journey from "./pages/Journey";
import PageWrapper from "./components/common/PageWrapper";

function AppRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/work" element={<PageWrapper><Work /></PageWrapper>} />
        <Route path="/achievements" element={<PageWrapper><Achievements /></PageWrapper>} />
        <Route path="/journey" element={<PageWrapper><Journey /></PageWrapper>} />
        <Route path="/story" element={<PageWrapper><Journey /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
