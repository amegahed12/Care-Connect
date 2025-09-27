import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./components/admin/AdminLayout";
import PlatformActivity from "./pages/Admin/PlatformActivity";
import ManagePatients from "./pages/Admin/ManagePatients";
import ManageDoctors from "./pages/Admin/ManageDoctors";
import CredentialVerification from "./pages/Admin/CredentialVerification";
import Requests from "./pages/Admin/Requests";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
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
                <p>Settings page coming soon...</p>
              </div>
            }
          />
        </Route>
        {/* Redirect root to admin dashboard */}
        <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
