import React, { useState } from "react";
import "./Certificates.css";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 1,
      course: "Full Stack Development",
      date: "Aug 15, 2025",
      certificateUrl: "#",
      image: "https://via.placeholder.com/600x400?text=Full+Stack+Development+Certificate",
    },
    {
      id: 2,
      course: "Artificial Intelligence",
      date: "Sep 01, 2025",
      certificateUrl: "#",
      image: "https://via.placeholder.com/600x400?text=AI+Certificate",
    },
    {
      id: 3,
      course: "Data Science",
      date: "Sep 05, 2025",
      certificateUrl: "#",
      image: "https://via.placeholder.com/600x400?text=Data+Science+Certificate",
    },
  ];

  return (
    <div className="certificates-page">
      <h2>🎓 My Certificates</h2>
      <p className="subtitle">Preview, download and showcase your achievements</p>

      <div className="certificates-list">
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <h3>{cert.course}</h3>
            <p>Issued on: {cert.date}</p>
            <div className="cert-buttons">
              <button onClick={() => setSelectedCert(cert)}>👁 Preview</button>
              <a href={cert.certificateUrl} target="_blank" rel="noreferrer">
                ⬇ Download
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Preview Modal */}
      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedCert.course}</h2>
            <img src={selectedCert.image} alt="Certificate Preview" />
            <p>Issued on: {selectedCert.date}</p>
            <button
              className="close-btn"
              onClick={() => setSelectedCert(null)}
            >
              ✖ Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
