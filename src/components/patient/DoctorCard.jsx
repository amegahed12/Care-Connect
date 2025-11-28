export default function DoctorCard({ doctor, onSelect }) {
  return (
    <div className="card doctor-card">
      <div>
        <h4>{doctor.name}</h4>
        <p className="muted">{doctor.specialty}</p>
      </div>
      <div>
        <button className="cc-btn" onClick={() => onSelect(doctor)}>Choose</button>
      </div>
    </div>
  );
}
