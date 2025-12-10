import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import vitusCarelogo from "../assets/nepho1.png";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm sticky-top">
        <div className="container">
        
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            <img src={vitusCarelogo} alt="logo" style={{ height: "60px" }} />
          </Link>

          {/* Desktop Menu - Shows on all screens except when sidebar is open */}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto gap-4 fw-semibold">
              <li className="nav-item">
                <Link className="nav-link nav-custom" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-custom" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-custom" to="/carrer">Careers</Link>
              </li>

              {/* Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link nav-custom dropdown-toggle"
                  to="#"
                  data-bs-toggle="dropdown"
                  role="button"
                >
                  Partner with us
                </Link>
                <ul className="dropdown-menu shadow">
                  <li><Link className="dropdown-item" to="/fordocotrs">For Doctors</Link></li>
                  <li><Link className="dropdown-item" to="/forhospital">For Hospitals</Link></li>
                </ul>
              </li>
            </ul>

            {/* Phone + Red Button - Hidden on mobile */}
            <div className="d-none d-lg-flex align-items-center gap-3">
                <a
    href="tel:9602515835"
    className="phone-btn d-flex align-items-center gap-2 text-decoration-none footer-link1"
  >
    <FaPhoneAlt size={16} />
    <span>9602515835</span>
  </a>

              {/* Neon Button */}
              <div className="neon-btn small">
                <svg className="neon-svg" viewBox="0 0 230 50" width="230" height="50" preserveAspectRatio="none">
                  <rect className="neon-line outer" x="3" y="3" rx="22" width="224" height="44" fill="none"></rect>
                  <rect className="neon-line inner" x="3" y="3" rx="22" width="224" height="44" fill="none"></rect>
                </svg>
                <Link to="find" className="neen">
                  <span className="neon-content">Find a Center</span>
                </Link>
              </div>
            </div>
          </div>

        
        </div>

        <div>
            {/* Sidebar Icon - Visible on ALL screen sizes */}
          <button className="sidebar-icon me-5" onClick={toggleSidebar}>
            <FaBars size={27} />
          </button>
        </div>
      </nav>

      {/* Sidebar / Offcanvas */}
      <div className={`sidebar ${sidebar ? "open" : ""}`}>
        <div className="sidebar-header d-flex justify-content-between align-items-center">
          <img src={vitusCarelogo} alt="logo" style={{ height: "50px" }} />
          <FaTimes size={26} className="close-icon" onClick={toggleSidebar} />
        </div>

        <ul className="sidebar-menu fw-semibold">
          <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
          <li><Link to="/about" onClick={toggleSidebar}>About</Link></li>
          <li><Link to="/carrer" onClick={toggleSidebar}>Careers</Link></li>
          <li><Link to="/blog" onClick={toggleSidebar}>Blog</Link></li>
          <li><Link to="/feedback" onClick={toggleSidebar}>Feedback</Link></li>
        </ul>

        {/* Mobile Contact Info */}
        <div className="mt-5">
          <button className="phone-btn w-100 d-flex align-items-center justify-content-center gap-2 mb-3">
            <FaPhoneAlt size={16} />
            <span>9602515835</span>
          </button>
          
          <Link to="find" className="neon-btn small d-flex justify-content-center align-items-center text-decoration-none" onClick={toggleSidebar}>
            <svg className="neon-svg" viewBox="0 0 230 50" width="230" height="50" preserveAspectRatio="none">
              <rect className="neon-line outer" x="3" y="3" rx="22" width="224" height="44" fill="none"></rect>
              <rect className="neon-line inner" x="3" y="3" rx="22" width="224" height="44" fill="none"></rect>
            </svg>
            <span className="neon-content">Find a Center</span>
          </Link>
        </div>
      </div>

      {/* Overlay for sidebar */}
      {sidebar && (
        <div 
          className="sidebar-overlay" 
          onClick={toggleSidebar}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 9998,
          }}
        ></div>
      )}
    </>
  );
};

export default Navbar;