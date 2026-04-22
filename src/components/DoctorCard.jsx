import "../styles/doctors.css";

function DoctorCard({ doctor }) {
  const whatsapp = `https://wa.me/918943055665?text=Hello I want to consult Dr. ${doctor.name}`;

  return (
    <div className="card">
      <div className="card-image">
        <img
          src={`https://dental-backend-ch8e.onrender.com${doctor.image}`}
          alt={doctor.name}
        />
      </div>

      <div className="card-content">
        <h3>{doctor.name}</h3>

        <p><b>Specialization:</b> {doctor.specialization}</p>
        <p><b>Experience:</b> {doctor.experience} years</p>

        <a href={whatsapp} target="_blank" className="btn">
          Book via WhatsApp
        </a>
      </div>
    </div>
  );
}

export default DoctorCard;