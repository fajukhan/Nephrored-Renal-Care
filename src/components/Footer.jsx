import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo2 from "../assets/nep2.png";
import { Link } from "react-router-dom";

const Footer = () => {


  




  return (
    <footer className="bg-vc-dark text-white pt-5 position-relative">
      <div className="container">
        <div className="row ">
          
          {/* Left Section */}
          <div className="col-md-5 mb-4">
            <img src={logo2} height={50} alt="logo" className="mb-3" />
            <ul className="list-unstyled mt-3">
              <li className="mb-2 d-flex align-items-center footer-link gap-2"><FaMapMarkerAlt /> Plot No. 01 Naruka Colony Basant Vihar Sikar (Raj.) 332001</li>
             <a
  href="tel:9478100624"
  className="mb-2 d-flex align-items-center footer-link my-3 gap-2"
>
  <FaPhoneAlt /> 9478100624
</a>

<a
  href="mailto:info@vituscare.com"
  className="mb-2 d-flex align-items-center footer-link gap-2 my-3"
>
  <FaEnvelope /> nephroredrenalcare@gmail.com
</a>
            </ul>
          </div>

          {/* Middle Section */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-semibold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="footer-link">Home</Link></li>
              <li className="mb-2"><Link to="/about" className="footer-link">About Us</Link></li>
              <li className="mb-2"><Link to="/blog" className="footer-link">Blog</Link></li>
              <li className="mb-2"><Link to="/carrer" className="footer-link">Careers</Link></li>
              <li className="mb-2"><Link to="/feedback" className="footer-link">Feedback</Link></li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold mb-3">Follow Us</h5>
            <ul className="list-unstyled d-flex gap-3">
              <li><a href="#" className="social"><FaFacebookF size={20} /></a></li>
              <li><a href="#" className="social"><FaYoutube size={20} /></a></li>
              <li><a href="#" className="social"><FaLinkedinIn size={20} /></a></li>
              <li><a href="#" className="social"><FaInstagram size={20} /></a></li>
            </ul>

            <ul className="list-unstyled mt-4">
              <li><Link to="/privacy" className="privacy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* WhatsApp Button */}
        <a href="https://wa.me/9478100624"
          target="_blank"
          rel="noopener noreferrer"
          className="position-fixed bottom-0 end-0 m-3 btn btn-success rounded-circle p-3 whatsapp-btn">
          <FaWhatsapp size={24} />
        </a>

       {/* Dialysis Button */}
<a
  href="mailto:nephroredrenalcare@gmail.com"
  className="position-fixed start-0 bottom-50 translate-middle-y btn btn-light rounded-3 p-3 dialysis-btn d-flex flex-column align-items-center"
>
  <span className="fw-semibold">I Need</span>
  <span className="fw-bold">Dialysis</span>
  <FaEnvelope size={20} className="mt-1" />
</a>
        <hr className="border-secondary mt-4" />
        <div className="text-center py-3 small">
          © 2025 Nephrored Renal Care. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
