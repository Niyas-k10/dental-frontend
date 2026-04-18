import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/register.css";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    dob: "",
    address: "",
    sex: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://dental-backend-ch8e.onrender.com/api/users/register/",
        form
      );

      alert("✅ Registration successful");
      navigate("/login");

    } catch (err) {
      alert(err.response?.data?.error || "❌ Registration failed");
    }
  };

  return (
    <div className="register-page">

      <form className="register-card" onSubmit={handleSubmit}>

        
        <h2>Create Account</h2>

        {/* INPUTS */}
        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
        />

        <input
          name="dob"
          type="date"
          value={form.dob}
          onChange={handleChange}
        />

        <input
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
        />

        <select name="sex" value={form.sex} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <button type="submit">Register</button>

        <p className="bottom-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>

      </form>
    </div>
  );
}

export default Register;