import "../styles/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaHome,
  FaUserMd,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
  FaBars,
  FaTimes
} from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const isLoggedIn = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* LOGO + BRAND */}
      <div className="brand">
        <img src="/images/icon.png" alt="logo" className="nav-logo" />
        <h2 className="brand-text">Enamel Studio</h2>
      </div>

      {/* HAMBURGER */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* NAV ITEMS */}
      <div className={`nav-icons ${menuOpen ? "active" : ""}`}>

        <Link to="/" className="nav-item" onClick={() => setMenuOpen(false)}>
          <FaHome />
          <span>Home</span>
        </Link>

        <Link to="/doctors" className="nav-item" onClick={() => setMenuOpen(false)}>
          <FaUserMd />
          <span>Doctors</span>
        </Link>

        {!isLoggedIn && (
          <>
            <Link to="/login" className="nav-item" onClick={() => setMenuOpen(false)}>
              <FaSignInAlt />
              <span>Login</span>
            </Link>

            <Link to="/register" className="nav-item" onClick={() => setMenuOpen(false)}>
              <FaUserPlus />
              <span>Register</span>
            </Link>
          </>
        )}

        {isLoggedIn && (
          <button className="nav-item logout" onClick={handleLogout}>
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        )}

      </div>

    </nav>
  );
}

export default Navbar;