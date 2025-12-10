import React from "react";
import { FaSearchLocation } from "react-icons/fa";

const Find = () => {
  return (
    <section className="find-section py-5">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5" data-aos="fade-up">
          <p className="find-top-sub">FIND YOUR NEAREST CENTER</p>
          <h2 className="find-heading">
            Locate <span>Your Dialysis Center</span>
          </h2>
          <p className="find-subline">Search by City, State or Center Name</p>
        </div>

        {/* Search Box */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-6 col-md-8" data-aos="zoom-in">
            <div className="find-search-wrapper">
              <input
                type="text"
                placeholder="Search location..."
                className="find-input"
              />
              <button className="find-btn">
                <FaSearchLocation className="me-2" /> Search
              </button>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="zoom-in-up">
            <div className="map-wrapper shadow-lg">
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.643682935076!2d75.1612109!3d27.6045745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396cbb4c15bd31cd%3A0xb7fd2d76e12ec2b6!2sVsnt%20vihar!5e0!3m2!1sen!2sin!4v1765334922336!5m2!1sen!2sin"
  width="1075"
  height="450"
  style={{ border: "0" }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Find;
