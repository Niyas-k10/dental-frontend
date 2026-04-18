import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import Register from "./pages/Register";

function AppWrapper() {
  const isLoggedIn = localStorage.getItem("token");
  const location = useLocation();

  // hide navbar on login/register
  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {isLoggedIn && !hideNavbar && <Navbar />}

      <Routes>
        {/* default route */}
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />

        {/* login/register */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* protected route */}
        <Route
          path="/doctors"
          element={isLoggedIn ? <Doctors /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;