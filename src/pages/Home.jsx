import "../styles/home.css";
import Footer from "../components/Footer";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="overlay">
          <h1>
            <ReactTyped
              strings={[
                "Smile Brighter with Expert Dental Care",
                "Your Perfect Smile Starts Here"
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </h1>

          <p>Advanced dental treatments with expert doctors</p>

          <Link to="/doctors" className="hero-btn">
            Book Now
          </Link>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <h2>About Our Clinic</h2>
        <p>
          We provide world-class dental care with modern equipment and
          experienced doctors. Your comfort and smile are our priority.
        </p>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2>Our Services</h2>

        <div className="services-grid">

          {/* CARD 1 */}
          <div className="service-card">
            <img src="/images/cleaning.jpg" alt="Teeth Cleaning" />

            <div className="hover-content">
              <h3>Teeth Cleaning</h3>
              <p>Keep your teeth clean and healthy</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="service-card">
            <img src="/images/root.jpg" alt="Root Canal" />

            <div className="hover-content">
              <h3>Root Canal</h3>
              <p>Pain-free treatment to save infected teeth</p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="service-card">
            <img src="/images/implant.jpg" alt="Dental Implants" />

            <div className="hover-content">
              <h3>Dental Implants</h3>
              <p>Permanent solution for missing teeth</p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="service-card">
            <img src="/images/braces.jpg" alt="Braces" />

            <div className="hover-content">
              <h3>Braces & Aligners</h3>
              <p>Straighten your teeth with modern methods</p>
            </div>
          </div>

        </div>
      </section>

      <Footer />

    </div>
  );
}

export default Home;