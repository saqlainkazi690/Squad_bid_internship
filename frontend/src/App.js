import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReferralPage from "./pages/ReferralPage";
import Header from './components/Header';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join/:referralCode" element={<ReferralPage />} />
      </Routes>
    </Router>
  );
}

export default App;
