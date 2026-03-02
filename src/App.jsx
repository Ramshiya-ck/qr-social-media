import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import QRCodeGenerator from "./components/QRCodeGenerator";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-slate-900">
        <Routes>
          {/* QR generator as the main entry */}
          <Route path="/" element={<QRCodeGenerator />} />
          {/* Public landing page that the QR code points to */}
          <Route path="/profile" element={<LandingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
