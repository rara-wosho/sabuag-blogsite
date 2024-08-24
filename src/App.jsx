import { useState } from "react";
import HomePage from "./pages/HomePage.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import AboutPage from "./pages/AboutPage.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/sabuag-blogsite" element={<HomePage />} />
        <Route path="/sabuag-blogsite/article" element={<ArticlePage />} />
        <Route path="/sabuag-blogsite/about" element={<AboutPage />} />
        <Route path="/sabuag-blogsite/admin" element={<AdminPage />} />
      </Routes>
    </>
  );
}

export default App;
