import { Outlet, Navigate } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import { useAuth } from "../../context/AuthContext";

export default function PatientLayout() {
  const { user } = useAuth();

  if (!user) return <Navigate to="/patient/login" replace />;

  return (
    <div>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
}
