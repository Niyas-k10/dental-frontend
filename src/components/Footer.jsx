import "../styles/footer.css";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-section">
          <h2>Dental Clinic</h2>
          <p>
            Providing modern dental care with expert doctors and advanced
            technology for a healthier smile.
          </p>
        </div>

        {/* CENTER */}
        <div className="footer-section">
          <h3>Contact</h3>

          <p><FaMapMarkerAlt /> Thrissur, Kerala</p>
          <p><FaPhoneAlt /> +91 8943055665</p>
          <p><FaEnvelope /> dentalclinic@gmail.com</p>
        </div>

        {/* RIGHT */}
        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="https://wa.me/918943055665"><FaWhatsapp /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Dental Clinic. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;