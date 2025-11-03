import { formatDateShort } from "../../utils/formatDate";

export default function AppointmentCard({ appt, doctor, onCancel }) {
  return (
    <div className="card appointment-card">
      <div>
        <h4>{doctor ? doctor.name : "Doctor"}</h4>
        <p>{formatDateShort(appt.date)}</p>
        <p className="muted">Status: {appt.status}</p>
      </div>
      <div>
        <button className="cc-btn" onClick={() => onCancel(appt.id)}>Cancel</button>
      </div>
    </div>
  );
}
