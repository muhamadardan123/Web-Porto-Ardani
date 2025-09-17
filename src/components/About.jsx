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
        <div className="section-block">
          <h3 className="sub-title">Organizational Experience</h3>
          <OrgCard
            title="Telco Hooligans | Himpunan Mahasiswa Teknik Telekomunikasi"
            year="2024"
          >
            <ul>
              <li>Serving as a forum for students to channel their interests in non-academic fields.</li>
              <li>Supporting community development and strengthening relationships among students.</li>
            </ul>
          </OrgCard>

          <OrgCard
            title="ASTERISK | Himpunan Mahasiswa Teknik Telekomunikasi"
            year="2023"
          >
            <ul>
              <li>Actively participating as a committee member in the orientation program for new students.</li>
              <li>Contribute to developing potential and internalizing organizational values to new students.</li>
            </ul>
          </OrgCard>

          <OrgCard
            title="Telkom Edutainment | Ikatan Mahasiswa Eks Karesidenan Banyumas"
            year="2022"
          >
            <ul>
              <li>Involved in organizing annual educational and entertainment events for students in the Banyumas Residency.</li>
              <li>Contribute to the preparation and implementation of various activities, including seminars, talk shows, and competitions.</li>
              <li>Helping to provide a platform for students to gain insight and inspiration in the fields of technology and education.</li>
            </ul>
          </OrgCard>

          <OrgCard
            title="GATHRAK | Himpunan Mahasiswa Teknik Telekomunikasi"
            year="2022"
          >
            <ul>
              <li>Involved in the organizing committee for the annual welcoming event for new students and graduates.</li>
              <li>Contribute to planning the parade and welcoming ceremony.</li>
              <li>Playing a role in fostering a sense of family between students and alumni.</li>
            </ul>
          </OrgCard>
        </div>

        {/* ======================
            Work Experience
        ====================== */}
        <div className="section-block">
          <h3 className="sub-title">Work Experience</h3>
          <OrgCard
            title="Praktik Kerja Lapangan | PT. Sinergi Adhitama Pati"
            year="2019 - 2020"
          >
            <ul>
              <li>Assist the technical team in installing and maintaining network infrastructure to ensure stable connections..</li>
              <li>Actively participate in troubleshooting and repairing network disruptions at customer locations..</li>
              <li>Assisting with wireless device configuration and optimization.</li>
              <li>Involved in the splicing and testing of fiber optic cables using OTDR tools.</li>
            </ul>
          </OrgCard>

          <OrgCard title="Magang | AirNav Indonesia" year="2024">
            <ul>
              <li>Assisting the CNSA technical team in the routine maintenance of communication, navigation, and surveillance (radar) systems.</li>
              <li>Developing a radar room temperature monitoring system with XY-MD02 sensors integrated with Node-RED using the TCP/IP protocol.</li>
              <li>Assisting with CCTV configuration and installation to improve security and monitoring in the workplace.</li>
            </ul>
          </OrgCard>
        </div>

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
        <div className="section-block">
          <h3 className="sub-title">Certifications</h3>
          
          {/* Sertifikat Cisco */}
          <div className="edu-item">
            <div>
              <h4>Cisco CCNA</h4>
              <p>Issued by Cisco Newtworking Academy</p>
              <p>2020</p>
              <p>CCNA R&S: Introduction to Networks</p>
              <a
                href="https://drive.google.com/file/d/1KvTQtY_LRV0ttIxy3QAHuJkMOVB_edxb/view?usp=sharing"
                className="ip-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Document ↗
              </a>
            </div>
          </div>

          {/* Tambah sertifikat lain di sini */}
          <div className="edu-item">
            <div>
              <h4>CODEPOLITAN</h4>
              <p>Issued by CODEPOLITAN</p>
              <p>2025</p>
              <p>Mengenal Pemrograman Komputer</p>
              <a
                href="https://www.codepolitan.com/c/MZ75OIE/"
                className="ip-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Document ↗
              </a>
            </div>
          </div>

          {/* Tambah sertifikat lain di sini */}
          <div className="edu-item">
            <div>
              <h4>CODEPOLITAN</h4>
              <p>Issued by CODEPOLITAN</p>
              <p>2025</p>
              <p>Belajar Bootstrap CSS Framework</p>
              <a
                href="https://www.codepolitan.com/c/YVJCQGA/"
                className="ip-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Document ↗
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
