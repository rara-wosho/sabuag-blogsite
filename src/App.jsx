import { useState } from "react";
import HomePage from "./pages/HomePage.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/signin" && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </>
  );
}

export default App;
