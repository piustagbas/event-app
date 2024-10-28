import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./pages";
import EventPopup from "./pages/EventPopup";
import SummarySection from "./pages/SummarySection";
import EventDetails from "./pages/EventDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/popup" element={<EventPopup />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/sum" element={<SummarySection />} />
        <Route path="/det" element={<EventDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
