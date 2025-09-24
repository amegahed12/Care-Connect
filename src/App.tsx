import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./components/admin/AdminLayout";
// import PlatformActivity from "./pages/Admin/PlatformActivity";
import ManagePatients from "./pages/Admin/ManagePatients";
// import ManageDoctors from "./pages/Admin/ManageDoctors";
// import CredentialVerification from "./pages/Admin/CredentialVerification";
// import ActivityLog from "./pages/Admin/ActivityLog";
// import AdminSettings from "./pages/Admin/AdminSettings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* <Route index element={<PlatformActivity />} /> */}
          <Route path="patients" element={<ManagePatients />} />
          {/* <Route path="doctors" element={<ManageDoctors />} />
          <Route path="verify-doctors" element={<CredentialVerification />} />
          <Route path="activity" element={<ActivityLog />} />
          <Route path="settings" element={<AdminSettings />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
