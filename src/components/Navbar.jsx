// src/components/Navbar.js
import React, { useState } from "react";
import "./Navbar.css";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaBars, FaWhatsapp } from "react-icons/fa";

function Navbar({ currentPage, handlePageChange }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Brand */}
      <div className="navbar-left">
        <a
          href="#home"
          className="navbar-brand"
          onClick={(e) => {
            e.preventDefault();
            handlePageChange("home");
            setMobileMenuOpen(false);
          }}
        >
          Ardan
        </a>
      </div>

      {/* Desktop Nav */}
      <ul className="nav-list">
        <li className="nav-item">
          <button
            className={`nav-link ${currentPage === "home" ? "active" : ""}`}
            onClick={() => {
              handlePageChange("home");
              setMobileMenuOpen(false);
            }}
            type="button"
          >
            Home
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${currentPage === "about" ? "active" : ""}`}
            onClick={() => {
              handlePageChange("about");
              setMobileMenuOpen(false);
            }}
            type="button"
          >
            About
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${currentPage === "projects" ? "active" : ""}`}
            onClick={() => {
              handlePageChange("projects");
              setMobileMenuOpen(false);
            }}
            type="button"
          >
            Project
          </button>
        </li>
        {/* Hapus <li> untuk "Contact" */}
      </ul>

      {/* Desktop social links */}
      <div className="desktop-social-links">
        <a href="https://github.com/muhamadardan123" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:muhamadardan997@gmail.com">
          <FaEnvelope />
        </a>
        <a href="https://www.instagram.com/ardan_ciwil" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/muhamad-auli-a-ardani-0047b1369" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://wa.me/6282138945561" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>

      {/* Hamburger for mobile */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        <FaBars />
      </div>

      {/* Mobile Menu */}
      <ul className={`nav-list mobile ${mobileMenuOpen ? "open" : ""}`}>
        <li className="nav-item">
          <button onClick={() => { handlePageChange("home"); setMobileMenuOpen(false); }}>Home</button>
        </li>
        <li className="nav-item">
          <button onClick={() => { handlePageChange("about"); setMobileMenuOpen(false); }}>About</button>
        </li>
        <li className="nav-item">
          <button onClick={() => { handlePageChange("projects"); setMobileMenuOpen(false); }}>Project</button>
        </li>
        {/* Hapus <li> untuk "Contact" */}

        {/* Mobile Social Links */}
        <li className="nav-item social-dropdown">
          <a href="https://github.com/muhamadardan123" target="_blank" rel="noreferrer">Github</a>
          <a href="mailto:muhamadardan997@gmail.com">Email</a>
          <a href="https://www.instagram.com/ardan_ciwil" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/in/muhamad-auli-a-ardani-0047b1369" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://wa.me/6282138945561" target="_blank" rel="noreferrer">WhatsApp</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
