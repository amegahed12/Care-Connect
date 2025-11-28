import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "./styles/Appointments.css";
import "./styles/Global.css";
import "./styles/Login_Register.css";
import "./styles/MedicalHistory.css";
import "./styles/Profile.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
