// src/components/Project.js
import React from "react";
import "./Project.css";

function Project() {
  return (
    <section className="project-section">
      <div className="project-container">
        <div className="project-header">
          <h1>My Projects</h1>
          <h2 className="final-title">FINAL PROJECT</h2>
        </div>

        {/* Box / Card Project */}
        <div className="project-box">
          <div className="project-content">
            {/* Bagian kiri: Deskripsi */}
            <div className="project-text">
              <h3>SedimTrack-IoT: IoT-Based Sediment Image Scanner</h3>
              <p>
                Developed an innovative IoT-based automated sediment imaging
                system (replacing expensive conventional equipment) as a
                cost-effective solution for geological documentation. Achieved a
                96.2% data transmission success rate, ±0.1cm movement precision,
                and &lt;10-second automated image stitching process.
                This project successfully transformed a manual, inconsistent
                geological documentation process into a standardized, automated
                one, significantly reducing operational costs while improving
                data quality.
              </p>

              <div className="tech-stack">
                <span>ESP32</span>
                <span>Kotlin</span>
                <span>MQTT/TLS</span>
                <span>Supabase</span>
                <span>OpenCV</span>
                <span>Python</span>
              </div>
            </div>

            {/* Bagian kanan: Gambar */}
            <div className="project-images">
              <img src="/alatfull.jpg" alt="alat full" className="image-top" />
              <div className="image-row">
                <img src="/setengah.jpg" alt="alat setengah" />
                <img src="/pcb.jpg" alt="pcb" />
              </div>
              <img src="/ui.jpg" alt="ui app" className="image-bottom" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
