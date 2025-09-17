import React from "react";
import { FaAward } from "react-icons/fa";
import "./About.css";

// OrgCard langsung pakai hover (tidak perlu klik)
const OrgCard = ({ title, year, children }) => {
  return (
    <div className="hover-card">
      <div className="card-header">
        <h4>{title}</h4>
        <span className="org-year">{year}</span>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};

const About = () => {
  return (
    <section className="about-page">
      <div className="about-container">
        {/* ======================
            Personal Profile
        ====================== */}
        <div className="section-block">
          <h3 className="sub-title">Personal Profile</h3>
          <p className="profile-text">
            I am a graduate of Telecommunications Engineering with expertise in
            network infrastructure, installation, and maintenance. In addition, I
            also have skills in web development. My internship experience at a
            telecommunications company has strengthened my technical skills,
            especially in identifying and solving problems with an analytical and
            innovative approach. I am committed to continuing to develop and
            contribute in the field of telecommunications.
          </p>
        </div>

        {/* ======================
            Education
        ====================== */}
        <div className="section-block">
          <h3 className="sub-title">Education</h3>
          <div className="edu-item">
            <div>
              <h4>Universitas Telkom</h4>
              <p>S1 Teknik Telekomunikasi</p>
              <p>2021 - 2025</p>
            </div>
            <span className="gpa">GPA: 2.88 / 4.00</span>
          </div>

          <div className="edu-item">
            <div>
              <h4>SMK Telkom Purwokerto</h4>
              <p>Teknik Jaringan Akses</p>
              <p>2018 - 2021</p>
            </div>
          </div>
        </div>

        {/* ======================
            Organizational Experience
        ====================== */}
        {/* ... (biarkan tetap sama, tidak ada gambar) ... */}

        {/* ======================
            Intellectual Property
        ====================== */}
        <div className="section-block">
          <h3 className="sub-title">Intellectual Property</h3>
          <div className="ip-grid">

            {/* Sertifikat Program */}
            <div className="ip-card">
              <div className="ip-header">
                <FaAward className="ip-icon" />
                <h4>Program Komputer pada Alat SEDIMTRACK-IoT</h4>
              </div>
              <p className="ip-sub">Kementerian Hukum dan HAM Republik Indonesia</p>
              <p className="ip-meta">Hak Cipta | No. EC00205116789 | Agustus 2025</p>
              <p className="ip-desc">
                Hak cipta atas program komputer yang diaplikasikan pada alat
                SEDIMTRACK-IoT untuk melakukan pemantauan endapan sedimen
                secara otomatis menggunakan teknologi IoT.
              </p>
              <a
                href="https://hakcipta.dgip.go.id/legal/c/YjliNWQ0OWQ5YzdkNDViMjYwZTk4OGJkNDViOTA1ODI="
                className="ip-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Document ↗
              </a>

              <div className="image-wrapper">
                <img
                  src={`${import.meta.env.BASE_URL}perangkat.jpg`}
                  alt="Sertifikat Program"
                  className="ip-image"
                />
                <img
                  src={`${import.meta.env.BASE_URL}perangkat1.jpg`}
                  alt="Sertifikat Program Hover"
                  className="ip-image hover"
                />
              </div>
            </div>

            {/* Sertifikat Aplikasi */}
            <div className="ip-card">
              <div className="ip-header">
                <FaAward className="ip-icon" />
                <h4>Aplikasi pada Alat SEDIMTRACK IoT</h4>
              </div>
              <p className="ip-sub">Kementerian Hukum dan HAM Republik Indonesia</p>
              <p className="ip-meta">Hak Cipta | No. EC002025116947 | Agustus 2025</p>
              <p className="ip-desc">
                Hak cipta atas aplikasi yang digunakan pada alat SEDIMTRACK IoT,
                mencakup konsep dasar, alur kerja, dan implementasi untuk
                pengumpulan data sedimen.
              </p>
              <a
                href="https://hakcipta.dgip.go.id/legal/c/YThmNWUyZDQwNDVlOTMxMDMzZGI1MGM2ODNhZGQ0MWI="
                className="ip-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Document ↗
              </a>

              <div className="image-wrapper">
                <img
                  src={`${import.meta.env.BASE_URL}aplikasi.jpg`}
                  alt="Sertifikat Aplikasi"
                  className="ip-image"
                />
                <img
                  src={`${import.meta.env.BASE_URL}aplikasi1.jpg`}
                  alt="Sertifikat Aplikasi Hover"
                  className="ip-image hover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ======================
            Certifications
        ====================== */}
        {/* ... (biarkan, tidak ada gambar lokal) ... */}
      </div>
    </section>
  );
};

export default About;
