import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminLayout from "./components/admin/AdminLayout";
import PlatformActivity from "./pages/Admin/PlatformActivity";
import ManagePatients from "./pages/Admin/ManagePatients";
import ManageDoctors from "./pages/Admin/ManageDoctors";
import CredentialVerification from "./pages/Admin/CredentialVerification";
import Requests from "./pages/Admin/Requests";
import PatientRegister from "./pages/Patient/PatientRegister";
import PatientLogin from "./pages/Patient/PatientLogin";
import DoctorRegister from "./pages/Doctor/DoctorRegister";
import DoctorLogin from "./pages/Doctor/DoctorLogin";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Patient Routes */}
        <Route path="/patient/register" element={<PatientRegister />} />
        <Route path="/patient/login" element={<PatientLogin />} />

        {/* Doctor Routes */}
        <Route path="/doctor/register" element={<DoctorRegister />} />
        <Route path="/doctor/login" element={<DoctorLogin />} />

        {/* Admin Login */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<PlatformActivity />} />
          <Route path="patients" element={<ManagePatients />} />
          <Route path="requests" element={<Requests />} />
          <Route path="doctors" element={<ManageDoctors />} />
          <Route path="verify-doctors" element={<CredentialVerification />} />
          <Route path="activity" element={<PlatformActivity />} />
          <Route
            path="settings"
            element={
              <div className="p-6">
                <h1 className="text-2xl font-bold">Settings</h1>
                <p>Under construction...</p>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
