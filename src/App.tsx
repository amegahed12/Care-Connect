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
import DoctorRegister from "./pages/Doctor/DoctorRegister";
import DoctorLogin from "./pages/Doctor/DoctorLogin";
import ProtectedRoute from "./components/ProtectedRoute";

//Ahmed Gamal code : Patient
import { AuthProvider } from "./context/AuthContext.jsx";
import PatientRegister from "./pages/Patient/PatientRegister.jsx";
import PatientLogin from "./pages/Patient/PatientLogin.jsx";
import PatientLayout from "./pages/Patient/PatientLayout.jsx";
import Profile from "./pages/Patient/Profile.jsx";
import Appointments from "./pages/Patient/Appointments.jsx";
import MedicalHistory from "./pages/Patient/MedicalHistory.jsx";

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        {/* Main Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Patient Routes */}
          {/* Patient public routes */}
          <Route path="/patient/register" element={<PatientRegister />} />
          <Route path="/patient/login" element={<PatientLogin />} />
          {/* patient-only: protected via PatientLayout */}
          <Route path="/patient" element={<PatientLayout />}>
            <Route index element={<Navigate to="profile" replace />} />
            <Route path="profile" element={<Profile />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="medical-history" element={<MedicalHistory />} />
          </Route>


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
          } >
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
    </AuthProvider>
  );
}

export default App;
