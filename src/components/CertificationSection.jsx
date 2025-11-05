import React from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";

const CertificationSection = () => {
  return (
    <section className="certification-section">
      <div className="certification-container">
        <h2 className="certification-title">Trusted & certified specialists</h2>

        <div className="certification-badges">
          <div className="cert-card">
            <div className="cert-icon">
              <AiFillSafetyCertificate />
            </div>
            <h4>Certified Drainlayer</h4>
            <p>
              Licensed and experienced in installing and maintaining effective
              drainage systems.
            </p>
          </div>

          <div className="cert-card">
            <div className="cert-icon">
              <AiFillSafetyCertificate />
            </div>
            <h4>Certified Plumber</h4>
            <p>
              Fully qualified to carry out residential and commercial plumbing
              installations and repairs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
