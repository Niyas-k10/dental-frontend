import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../styles/login.css";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/users/login/",
        form
      );

      localStorage.setItem("token", res.data.access_token);

      navigate("/");
    } catch (err) {
      alert(err.response?.data?.error || "Invalid credentials");
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">
         

        <img src="/images/icon.png" alt="logo" className="logo" />
        <h2 className="brand-name">Enamel Studio</h2>

        
        <p className="subtitle">Login to your account</p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
          />

          {/* PASSWORD FIELD */}
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
            />

            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button type="submit">Login</button>

        </form>

        <p className="bottom-text">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>

      </div>

    </div>
  );
}

export default Login;