import React, { useState, useEffect } from "react";
import "./Home.css";

function Home({ handlePageChange }) {
  const [showGaris, setShowGaris] = useState(false);
  const [hideArrow, setHideArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHideArrow(true);
      } else {
        setHideArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="home-section">
 <div className="profile-wrapper">
  {/* Garis Dekorasi */}
  <img
    src="/garisre.png"
    alt="garis dekorasi"
    className={`garis-dekorasi ${showGaris ? "show" : ""}`}
  />

  {/* Foto Profil */}
  <div
    className="profile-container"
    onMouseEnter={() => setShowGaris(true)}   // hover masuk
    onMouseLeave={() => setShowGaris(false)} // hover keluar
    onClick={() => setShowGaris(prev => !prev)} // toggle klik (mobile)
  >
    <img src="/foto.jpg" alt="Profile" className="profile-image" />
  </div>
  <div className="panah-dekorasi">
    <img src="/panahme.png" alt="Arrow" className="panah-image" />
  </div>
</div>

      {/* Teks */}
      <div className="text-container">
        <h1>Hi! I Am Muhamad Auli'a Ardani</h1>
        <p>
          Graduate of Telecommunications Engineering with expertise in
          networking and web development. I have internship experience that
          strengthens my technical and problem-solving skills.
        </p>
        <button
          className="connect-button"
          onClick={() => handlePageChange("about")}
        >
          Connect with me
        </button>
      </div>

      {/* Scroll Down Arrow (Bounce + Hide) */}
      <div
        id="scrollArrow"
        className={`scroll-down ${hideArrow ? "hide" : ""}`}
      >
        ↓
      </div>

      {/* ==============================
          PROJECTS HIGHLIGHT SECTION
      ============================== */}
      <section id="projects" className="projects-highlight-section">
        <div className="projects-header">
          <h2>My Projects Highlight</h2>
          <button
            className="view-all-button"
            onClick={() => handlePageChange("projects")}
          >
            View All →
          </button>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image-placeholder">
              <img src="/alatfull.jpg" alt="SedimTrack-IoT" />
            </div>
            <div className="project-category">FINAL PROJECT</div>
            <h3>SedimTrack-IoT: IoT-Based Sediment Image Scanner</h3>
            <p>
              Developed an innovative IoT-based automated sediment imaging
              system (replacing expensive conventional equipment) as a
              cost-effective solution for geological documentation. Achieved a
              96.2% data transmission success rate, ±0.1cm movement precision,
              and &lt;10-second automated image stitching process. This project
              successfully transformed a manual, inconsistent geological
              documentation process into a standardized, automated one,
              significantly reducing operational costs while improving data
              quality.
            </p>

            <div className="project-tech-stack">
              <span className="tech-pill">ESP32</span>
              <span className="tech-pill">Kotlin</span>
              <span className="tech-pill">MQTT/TLS</span>
              <span className="tech-pill">Supabase</span>
              <span className="tech-pill">OpenCV</span>
              <span className="tech-pill">Python</span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
