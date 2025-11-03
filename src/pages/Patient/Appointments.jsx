import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { api } from "../../services/api";
import AppointmentCard from "../../components/patient/AppointmentCard";
import AppointmentForm from "../../components/patient/AppointmentForm";

export default function Appointments() {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [doctorsMap, setDoctorsMap] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (!user) return;
    loadAppointments();
    api.getDoctors().then((d) => {
      const map = {};
      d.forEach(doc => (map[doc.id] = doc));
      setDoctorsMap(map);
    });
  }, [user]);

  function loadAppointments() {
    api.getAppointmentsByPatient(user.id).then(setAppointments);
  }

  async function handleCancel(id) {
    setMsg("");
    try {
      await api.cancelAppointment(id);
      loadAppointments();
      setMsg("Appointment cancelled");
    } catch (err) {
      setMsg(err.message || "Cancel failed");
    }
  }

  function handleBooked(appt) {
    loadAppointments();
    setShowForm(false);
  }

  return (
    <div className="page">
      <h2>My Appointments</h2>
      <div style={{ marginBottom: 12 }}>
        <button className="cc-btn" onClick={() => setShowForm((s) => !s)}>{showForm ? "Close" : "Add Appointment"}</button>
      </div>

      {showForm && <div className="card"><AppointmentForm patientId={user.id} onBooked={handleBooked} /></div>}

      <div style={{ marginTop: 12 }}>
        {appointments.length === 0 ? (
          <div className="muted">No upcoming appointments.</div>
        ) : (
          appointments.map((a) => (
            <AppointmentCard key={a.id} appt={a} doctor={doctorsMap[a.doctorId]} onCancel={handleCancel} />
          ))
        )}
      </div>

      {msg && <p className="muted" style={{ marginTop: 8 }}>{msg}</p>}
    </div>
  );
}
