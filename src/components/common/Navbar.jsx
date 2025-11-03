import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const nav = useNavigate();

  function handleLogout() {
    logout();
    nav("/patient/login");
  }

  return (
    <nav className="cc-nav">
      <div className="cc-nav-left">
        <Link to="/patient/profile" className="cc-logo">Care Connect</Link>
      </div>
      <div className="cc-nav-right">
        <Link to="/patient/profile">Profile</Link>
        <Link to="/patient/appointments">Appointments</Link>
        <Link to="/patient/medical-history">Medical History</Link>
        {user && <button className="link-like" onClick={handleLogout}>Logout</button>}
      </div>
    </nav>
  );
}
