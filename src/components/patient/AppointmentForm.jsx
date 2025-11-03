import { useEffect, useState } from "react";
import { api } from "../../services/api";

export default function AppointmentForm({ patientId, onBooked }) {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctorId, setSelectedDoctorId] = useState("");
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    api.getDoctors().then(setDoctors);
  }, []);

  useEffect(() => {
    console.log("Doctor selected:", selectedDoctorId); // for debugging
    if (!selectedDoctorId) {
      setSlots([]);
      setSelectedSlot("");
      return;
    }
    api.getAvailableSlots(Number(selectedDoctorId)).then(
      slots => {
    console.log("Fetched slots:", slots);// for debugging
    setSlots(slots);
  });
  }, [selectedDoctorId]);

  async function handleBook(e) {
    e.preventDefault();
    setMsg("");
    if (!selectedDoctorId || !selectedSlot) {
      setMsg("Choose doctor and slot.");
      return;
    }
    setLoading(true);
    try {
      const appt = await api.bookAppointment(patientId, Number(selectedDoctorId), selectedSlot);
      setLoading(false);
      setMsg("Booked successfully.");
      setSelectedDoctorId("");
      setSelectedSlot("");
      setSlots([]);
      onBooked && onBooked(appt);
    } catch (err) {
      setLoading(false);
      setMsg(err.message || "Failed to book");
    }
  }

  return (
    <form className="appointment-form" onSubmit={handleBook}>
      <label>Doctor</label>
      <select value={selectedDoctorId} onChange={(e) => setSelectedDoctorId(e.target.value)}>
        <option value="">-- choose doctor --</option>
        {doctors.map((d) => (
          <option key={d.id} value={d.id}>{d.name} — {d.specialty}</option>
        ))}
      </select>

      <label>Available slots</label>
      <select value={selectedSlot} onChange={(e) => setSelectedSlot(e.target.value)}>
        <option value="">-- choose slot --</option>
        {slots.map((s) => (
          <option key={s} value={s}>{s.replace("T", " ")}</option>
        ))}
      </select>

      <div style={{ marginTop: 8 }}>
        <button type="submit" className="cc-btn" disabled={loading}>{loading ? "Booking..." : "Book Appointment"}</button>
      </div>

      {msg && <p className="muted">{msg}</p>}
    </form>
  );
}