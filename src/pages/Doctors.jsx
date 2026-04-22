import { useEffect, useState } from "react";
import axios from "axios";
import DoctorCard from "../components/DoctorCard";
import "../styles/doctors.css";

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://dental-backend-ch8e.onrender.com/api/doctors/")
      .then((res) => {
        setDoctors(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching doctors:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading doctors...</h2>;
  }

  return (
    <div className="doctors-container">
      {doctors.length > 0 ? (
        doctors.map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))
      ) : (
        <h2 style={{ textAlign: "center" }}>No doctors available</h2>
      )}
    </div>
  );
}

export default Doctors;