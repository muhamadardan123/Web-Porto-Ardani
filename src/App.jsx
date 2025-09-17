// src/App.js
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Project from "./components/Project.jsx";
import Footer from "./components/Footer.jsx";
// import Contact from "./components/Contact"; <-- Hapus baris ini

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === "home") return <Home handlePageChange={handlePageChange} />;
    if (currentPage === "about") return <About />;
    if (currentPage === "projects") return <Project />;
    // Hapus baris ini: if (currentPage === "contact") return <Contact />;
    return <Home handlePageChange={handlePageChange} />;
  };

  return (
    <div className="app-container">
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer handlePageChange={handlePageChange} />
    </div>
  );
}

export default App;